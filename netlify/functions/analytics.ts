import { Handler } from '@netlify/functions';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

const propertyId = process.env.GA_PROPERTY_ID;

// Create credentials object from environment variables
const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

const analyticsDataClient = new BetaAnalyticsDataClient({ credentials });

export const handler: Handler = async () => {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: propertyId,
      dateRanges: [{ startDate: 'yesterday', endDate: 'yesterday' }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
        { name: 'bounceRate' },
      ],
    });

    const rows = response.rows || [];
    const result = {
      visitors: rows[0]?.metricValues?.[0]?.value ?? '0',
      pageViews: rows[0]?.metricValues?.[1]?.value ?? '0',
      avgTimeOnPage: rows[0]?.metricValues?.[2]?.value ?? '0',
      bounceRate: rows[0]?.metricValues?.[3]?.value ?? '0%',
    };

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (err) {
    console.error('GA4 API Error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Analytics fetch failed' }),
    };
  }
};
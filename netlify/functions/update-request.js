const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async function (event) {
  try {
    const { id, updates } = JSON.parse(event.body);
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    const row = rows.find((r) => r.rowIndex == id);
    if (!row) throw new Error('Row not found');

    Object.keys(updates).forEach((key) => {
      row[key] = updates[key];
    });

    await row.save();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

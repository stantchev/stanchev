const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async function (event) {
  try {
    const body = JSON.parse(event.body);

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    // 🔄 CORRECT way to authenticate with the latest version
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // first sheet in the doc

    await sheet.addRow({
      Name: body.name,
      Email: body.email,
      Phone: body.phone || '',
      Subject: body.subject || '',
      Message: body.message,
      Status: 'ново',
      Pinned: 'false',
      DeletedAt: '',
      Date: new Date().toLocaleString(),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Успешно изпратено!' }),
    };
  } catch (error) {
    console.error('Error submitting to Google Sheet:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Грешка при запис',
        details: error.message,
      }),
    };
  }
};

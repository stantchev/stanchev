import nodemailer from 'nodemailer';
import { sendTelegramNotification } from '@/lib/sendTelegram';

export async function sendEmail({
  name,
  email,
  subject,
  message
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const mailOptions = {
    from: `"${name}" <${process.env.SMTP_USER}>`,
    replyTo: email,
    to: process.env.SMTP_USER,
    subject,
    text: message
  };

  const result = await transporter.sendMail(mailOptions);

  // Изпрати телеграм съобщението СЛЕД като мейлът е успешно пратен
  try {
  await sendTelegramNotification(`
	Ново съобщение от сайта:
	👤 Име: ${name}
	📧 Email: ${email}
	📝 Съобщение: ${message}
  `);
		} catch (err) {
  console.error('Грешка при Телеграм нотификация:', err);
}

  return result;
}
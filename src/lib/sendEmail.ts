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

  const textBody = `Нов контакт от сайта:\nИме: ${name}\nEmail: ${email}\nТема: ${subject}\n\n${message}`;

  const htmlBody = `
    <div>
      <p><strong>Нов контакт от сайта</strong></p>
      <p><strong>Име:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Тема:</strong> ${subject}</p>
      <hr />
      <p style="white-space: pre-wrap;">${message}</p>
    </div>
  `;

  const finalSubject = `[Contact] ${subject} — ${name} <${email}>`;
  const fromDisplay = `${name} via Website`;

  const mailOptions = {
    from: `${fromDisplay} <${process.env.SMTP_USER}>`,
    sender: process.env.SMTP_USER,
    replyTo: email,
    to: process.env.SMTP_USER,
    subject: finalSubject,
    text: textBody,
    html: htmlBody,
  } as const;

  const result = await transporter.sendMail(mailOptions);

  try {
  await sendTelegramNotification(`
\tНово съобщение от сайта:
\t👤 Име: ${name}
\t📧 Email: ${email}
\t📝 Съобщение: ${message}
  `);
		} catch (err) {
  console.error('Грешка при Телеграм нотификация:', err);
}

  return result;
}

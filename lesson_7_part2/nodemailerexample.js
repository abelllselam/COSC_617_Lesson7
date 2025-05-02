const nodemailer = require("nodemailer");

async function sendTestEmail() {
  const testAccount = await nodemailer.createTestAccount();
  console.log("Login:", testAccount.user);
  console.log("Password:", testAccount.pass);

  const transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"Test sender" <test@example.com>',
      to: "receiver@example.com",
      subject: "Test Email",
      text: "Hello Abel,\n\nThis is a test email sent using Nodemailer and Ethereal.\n\nRegards,\nChatGPT",
    });
    console.log("Message sent:", info);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info)); // ✅ Fixed
  } catch (error) {
    console.error("Email send error:", error.message);
  }
}

sendTestEmail().catch(console.error);

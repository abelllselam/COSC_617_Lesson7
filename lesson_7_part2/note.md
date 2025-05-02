**Nodemailer**

# What is a nodemailer:

- Very simply put it allows developers to send emails from their Node.js app.
- Almost every side uses mailing:
  - forgot password?
  - The contact section of a webpage
  - Account creation/verify account

# TCP/IP protocol for Mail Delivery:

- SMTP, POP3 and IMAP, each protocol has a specific set of communication rules between computers.

# SMTP:

- Simple Mail Transfer Protocol is used when email is delivered from an email client, such as Outlook Express to an email server or when email is delivered from one email server to another. It is typically used for sending email messages: SMTP uses port 25.

# POP3:

- Post Office Protocol allows an email client to download an email from an email server.
  This protocol is simply for download. POP3 is typically port 110.

# IMAP:

- Internet message access protocol is designed to let users keep their email on the server. This usually requires more disk space on the server and more CPU resources than POP3 - since emails are stored on the server. Typically uses port 143.

# Stringing it all together:

- Let’s say you want to send an email to jirani@towson.edu
  - You click send in your email client (Let’s say it’s Outlook Express)
  - Outlook Express delivers the email to your email server using SMTP
  - Your server delivers the email to (potentially mail.towson.edu) using SMTP
  - My email client downloads the email from mail.towson.edu to my laptop using POP3 (or maybe IMAP).

# How to use Nodemailer:

- npm install nodemailer
  then
- require ('nodemailer')

# To send Emails you Need A Transport Object:

- let transporter = nodemailer.createTransport(transpot[, default])

- Where:
  - transporter - is going to be an object that is able to send email.
  - transport - is the transport configuration object, connection url or a transport plugin instance.
  - default - is an object that defines default values for mail options.

# Building the Transport Object:

```js
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com'
    port:465,
    secure: true,
    auth:{
        user: 'nodemailertowson@gmail.com',
        pass: 'xxxxx'
    }
});
```

# Mail option as JSON:

```js
const mailOption = {
  from: "your.email@gmail.com",
  to: "recipient@example.com",
  subject: "Hello from Nodemailer!",
  text: "This is a test email send using Nodemailer.",
};
```

# Call the transport function:

- calling the transport function and passing the mailoptions. Boom! you have sent an email, so simple.

```js
// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error:", error);
  }
  console.log("Email sent:", info.response);
});
```

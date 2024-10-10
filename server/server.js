import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
});

app.post('/send-email-client', async (req, res) => {
  const { client, phoneClient } = req.body;
  const mailOptions = {
    from: "hello@andyu.ru",
    to: "hello@andyu.ru",
    subject: "Хочу обсудить проект",
    text: `
      Имя: ${client}
      Номер телефона: ${phoneClient}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Письмо отправлено");
    console.log("Письмо отправлено");
  } catch (error) {
    res.status(500).send("Ошибка при отправке письма");
    console.log("Ошибка при отправке письма:", error);
  }
});

app.post('/send-email-partner', async (req, res) => {
  const { partner, phonePartner, activityPartner } = req.body;
  const mailOptions = {
    from: "hello@andyu.ru",
    to: "hello@andyu.ru",
    subject: "Хочу стать партнером",
    text: `
      ФИО: ${partner}
      Номер телефона: ${phonePartner}
      Деятельность: ${activityPartner}
    `,
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Письмо отправлено");
    console.log("Письмо отправлено");
  } catch (error) {
    res.status(500).send("Ошибка при отправке письма");
    console.log("Ошибка при отправке письма:", error);
  }
})

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});

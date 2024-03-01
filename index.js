import express from "express";
import sgMail from "@sendgrid/mail";
import * as dotenv from "dotenv";
import { db } from "./config.js";
import {
    addDoc,
    collection,
    doc,
    getDocs,
    setDoc,
    getDoc
  } from "firebase/firestore";
const app = express();
dotenv.config();

app.use(express.static("public"));
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listning at port 3000........");
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "sahil.dixit15.sd@gmail.com", // Change to your recipient
  from: "sahildixit9969@gmail.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

app.post("/api/sendEmail", (req, res) => {
  console.log(req.body);
  const msg = {
    to: req.body.email, // Change to your recipient
    from: "sahildixit9969@gmail.com", // Change to your verified sender
    subject: "Thank You for showing your interest!",
    text: "Please stay tuned for further updates. If you have any questions or concerns, feel free to contact us again.",
    html: "<strong>Please stay tuned for further updates. If you have any questions or concerns, feel free to contact us again</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.json({ message: "Email sent" });
      sendToDb(req.body.email);
    })
    .catch((error) => {
      console.error(error);
      res.json({ message: "Email not sent" });
    });
});

async function sendToDb(email) {
  const newDoc =await addDoc(collection(db, "emails"), {
    email: email,
  });
  console.log("Document written with ID: ", newDoc.id);
}

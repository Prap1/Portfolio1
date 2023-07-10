const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "praphool47@gmail.com",
      pass: "mgxlfctsihuhysco",
    },
  });

  const mailOptions = {
    from: "praphool47@gmail.com",
    to: "praphool47@gmail.com", // Update with your email address
    subject: "Contact Message",
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred while sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    } else {
      console.log("Email sent successfully!", info.response);
      res.json({ message: "Email sent successfully" });
    }
  });
});

module.exports = router;

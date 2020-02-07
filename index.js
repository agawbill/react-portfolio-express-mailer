import express from "express";
import path from "path";
import keys from "./config/keys";
import sslRedirect from "heroku-ssl-redirect";

const app = express();
const port = process.env.PORT || 5000;

app.use(sslRedirect());

app.use(
  express.json({
    type: ["application/json", "text/plain"]
  })
);

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/email", (req, res) => {
  const nodemailer = require("nodemailer");
  const { google } = require("googleapis");
  const OAuth2 = google.auth.OAuth2;
  const { clientId, clientSecret, redirectUrl, refreshToken } = keys();
  console.log("clientId", clientId);
  console.log(keys());

  const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

  const [name, email, subject, category, message] = [
    req.body.name,
    req.body.email,
    req.body.subject,
    req.body.category,
    req.body.message
  ];

  oauth2Client.setCredentials({
    refresh_token: refreshToken
  });

  const accessToken = oauth2Client.getAccessToken();

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "anthgawbill@gmail.com",
      clientId,
      clientSecret,
      refreshToken,
      accessToken
    }
  });

  const mailOptions = {
    from: "anthgawbill@gmail.com",
    to: "anthonyga@pcom.edu",
    subject: subject,
    text: message,
    html: `<b>Message from:</b> ${name}<br></br> <b>Email:</b> ${email} <br></br> 
    <b>Regarding:</b> ${category}<br></br> <b>Message:</b> ${message}`
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
    } else {
      console.log(response);
      smtpTransport.close();
      return res.send({ success: "true" });
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

// Download the helper library from https://www.twilio.com/docs/node/install
import twilio from "twilio";
import * as dotenv from "dotenv";
import express from "express";
// import { Message } from "twilio/lib/twiml/MessagingResponse";
dotenv.config();
const app = express();

const SendSMS = async () => {
  // Find your Account SID and Auth Token at twilio.com/console
  // and set the environment variables. See http://twil.io/secure
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);

  return client.messages
    .create({
      body: "otp 3243",
      from: "+16197597385",
      to: "+919745962256",
    })
    .then((message) => {
      console.log(message, "Message send");
    })
    .catch((err) => {
      console.log(err, "message not send");
    });

  // const verification = await client.verify.v2
  //   .services("VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  //   .verifications.create({
  //     channel: "sms",
  //     to: "+919745962256",
  //     from: "+16197597385",
  //   });

  // console.log(verification.sid);
};

// client.verify.v2
//   .services("VAa345bc608287b67976ad6785dac6db41")
//   .verificationChecks.create({ to: "+919745962256", code: "[Code]" })
//   .then((verification_check) => console.log(verification_check.status));

SendSMS();
app.listen(5000, () => console.log("run at port 5000"));

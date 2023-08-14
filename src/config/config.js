import * as dotenv from "dotenv";

dotenv.config({
  path: "src/config/.env",
});

//server

const PORT = process.env.PORT;

//DDBB
const MONGODB_CNX_STR =
  process.env.MONGODB_CNX_STR || "mongodb://127.0.0.1:27017/Astros";

//email
const CONFIG_EMAIL = {
  service: "gmail",
  port: 587,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
};

export { PORT, MONGODB_CNX_STR, CONFIG_EMAIL };

import hbs from "nodemailer-express-handlebars";
import nodemailer from "nodemailer";
import "dotenv/config";

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  },
});

transport.use(
  "compile",
  hbs({
    viewEngine: {
      partialsDir: "views",
      layoutsDir: "views",
      defaultLayout: "",
    },
    viewPath: "./src/views",
  })
);

export default transport;

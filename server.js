const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const compression = require('compression');
const nodemailer = require('nodemailer');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

require('dotenv').config();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
app.use(compression);
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res, next) => {
  res.locals.loggedIn = req.session.loggedIn;
  next();
})

app.post('/send', (req , res) => {
  const output = `New Message received
  
  Name: ${req.body.firstName} ${req.body.lastName}
  Phone: ${req.body.phone}
  Email: ${req.body.email}
  Messsage:
  ${req.body.comment}`;

  // const fromSender = `"${req.body.firstName} ${req.body.lastName}"<'${req.body.email}'>`

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls:{
        rejectUnauthorized: false
      }
    });
  
    // send mail with defined transport object
    let mailOptions ={
      from: "leonwebtest@gmail.com", // sender address
      to: "leonhsu95@gmail.com", // list of receivers
      subject: "New Message from Nodemailer", // Subject line
      text: output
      // html: output, // html body      
    };
  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
      console.log(error);
      } else {
        console.log('Email sent');
      }
    });

  });

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on ' + PORT));
});

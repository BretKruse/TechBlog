const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
const helpers = require("./utils/helpers");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Setup Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Session configuration
const ses = {
  secret: process.env.SESSION_SECRET || "Super secret secret", // Move to env variables in production
  cookie: { maxAge: 40000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(ses));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Set Handlebars as the default view engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

// Start the server after syncing the models to the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});


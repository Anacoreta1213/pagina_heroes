const express = require("express");
const cors = require("cors");
const app = express();
const heroesRoutes = require("./routers/heroes.routers");

//-----------Middleware----------:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes 
app.use("/v3",heroesRoutes);

// Static file:
app.use("/public",express.static(`${__dirname}/storage/img`));

module.exports = app;


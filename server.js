const express = require("express");
const routes = require("./src/routes/routes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", routes);
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log("server running on port " + PORT));

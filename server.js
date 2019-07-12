const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Data base connection
connectDB();

app.get("/", (req, res) => res.send("API Running"));

//routes
app.use("api/users", require("./routes/api/users"));
app.use("api/auth", require("./routes/api/auth"));
app.use("api/profile", require("./routes/api/profile"));
app.use("api/users", require("./routes/api/users"));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
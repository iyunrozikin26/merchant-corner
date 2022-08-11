require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process?.env?.PORT || 5000;
const cors = require("cors");
const router = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello Hai");
});

app.use(router)

app.listen(PORT, () => console.log(`server running on ${PORT}`));

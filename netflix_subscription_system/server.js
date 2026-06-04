
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",
    database: "netflix_db"
});

db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
    } else {
        console.log("MySQL Connected");
    }
});

app.get("/", (req, res) => {
    db.query("SELECT * FROM subscriptions", (err, result) => {
        if (err) throw err;
        res.render("index", { plans: result });
    });
});

app.post("/add", (req, res) => {

    const {
        plan_name,
        monthly_price,
        video_quality,
        screens_allowed,
        subscription_status
    } = req.body;

    const sql = `
    INSERT INTO subscriptions
    (plan_name, monthly_price, video_quality, screens_allowed, subscription_status)
    VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            plan_name,
            monthly_price,
            video_quality,
            screens_allowed,
            subscription_status
        ],
        (err) => {
            if (err) {
                console.log(err);
                return res.send("Plan Name must be unique!");
            }
            res.redirect("/");
        }
    );
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

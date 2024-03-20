const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'signup'
});

app.get('/AllCarz', (req, res) => {
    const sql = "SELECT COUNT(DISTINCT carid) AS total FROM car_approve;";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
});

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});

module.exports = server;
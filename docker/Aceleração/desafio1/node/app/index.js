const SERVICE_PORT = 3000
const express = require("express");
const app = express();

const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "fullcycle"
}

const mysql = require("mysql");

const connection = mysql.createConnection(config);
const sql = "select nome from modulos";


app.get("/", (req, res) => {
    body = "<h1>Módulos Full Cycle</h1><ul><li>{{nomes}}</li></ul>"
    connection.query(sql, (err, rows) => {
        if (err) throw err;
        let nomes = []
        rows.forEach((row)=>{nomes.push(row.nome)});
        body = body.replace("{{nomes}}", nomes.join("</li><li>"));
        res.send(body);
    })
})

app.listen(SERVICE_PORT, () =>{
    console.log("rodando na porta " + SERVICE_PORT.toString());
})

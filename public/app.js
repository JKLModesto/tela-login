const express = require('express')
const bodyParser = require("body-parser")
const app = express();
const PORT = 3000

app.use(bodyParser.json())

app.get('/login', (req, res, next)=>{
    res.sendFile(__dirname+"/login.html")
})  

app.get('/cadastro', (req,res,next)=>{
    res.sendFile(__dirname+"/cadastro.html")
})


app.post('/cadastro/infos', (req, res, next)=>{
    const userData = req.body

    res.status(200).send(console.log(userData));
})


/*
BANCO DE DADOS FUTURO
const oracledb = require("oracledb");
  const dbconfig = require("../DB/dbconfig.js");

  oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

  try{
    const connection = await oracledb.getConnection(dbconfig);
    if (!connection) {
      throw new Error("Conexão com o banco de dados não estabelecida");
    }
    const result = await connection.execute(
      `INSERT INTO modestosystem (username, fullname, email, cpf, password)
                VALUES (:username, :fullname, :email, :cpf, :password)`,
      {
        username: usernameCad.value,
        fullname: fullnameCad.value,
        email: emailCad.value,
        cpf: cpfCad.value,
        password: passwordCad.value,
      }
    );
    console.log(result.rows);
    await connection.close();
  } catch(error){
    console.error('Erro ao inserir registro:', error)
  }

*/

app.listen(PORT)
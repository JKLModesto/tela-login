const usernameCad = document.getElementById("username") as HTMLInputElement;
const fullnameCad = document.getElementById("fullname") as HTMLInputElement;
const emailCad = document.getElementById("email") as HTMLInputElement;
const cpfCad = document.getElementById("cpf") as HTMLInputElement;
const passwordCad = document.getElementById("password") as HTMLInputElement;
const passwordConfirmationCad = document.getElementById(
  "passwordConfirmation"
) as HTMLInputElement;
const cadBtn = document.getElementById("cadBtn") as HTMLButtonElement;

passwordConfirmationCad.addEventListener("change", () => {
  if (passwordCad.value !== passwordConfirmationCad.value) {
    const spanElement = document.getElementById(
      "passwordCheck"
    ) as HTMLSpanElement;
    spanElement.textContent = "As senhas não coincidem!!";
    spanElement.style.color = "red";
    spanElement.style.fontSize = "20px";
    cadBtn.disabled = true;
  } else {
    const spanElement = document.getElementById(
      "passwordCheck"
    ) as HTMLSpanElement;
    spanElement.textContent = "As senhas coincidem!!";
    spanElement.style.color = "green";
    spanElement.style.fontSize = "20px";
    cadBtn.disabled = false;
  }
});

cadBtn.addEventListener("click", async () => {
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
});

const usernameCad = document.getElementById('username') as HTMLInputElement;
const fullnameCad = document.getElementById('fullname') as HTMLInputElement;
const emailCad = document.getElementById('email') as HTMLInputElement;
const cpfCad = document.getElementById('cpf') as HTMLInputElement;
const passwordCad = document.getElementById('password') as HTMLInputElement;
const passwordConfirmationCad = document.getElementById('passwordConfirmation') as HTMLInputElement;
const cadBtn = document.getElementById('cadBtn') as HTMLButtonElement;

passwordConfirmationCad.addEventListener('focusout', () => {
   if( passwordCad.value !== passwordConfirmationCad.value){
    const spanElement = document.getElementById('passwordCheck') as HTMLSpanElement;
    spanElement.textContent = 'As senhas não coincidem!!'; 
    spanElement.style.color = 'red';
    spanElement.style.fontSize = '20px';
    cadBtn.disabled = true;
   } else{
    const spanElement = document.getElementById('passwordCheck') as HTMLSpanElement;
    spanElement.textContent = 'As senhas coincidem!!'; 
    spanElement.style.color = 'green';
    spanElement.style.fontSize = '20px';
    cadBtn.disabled = false;
   }
})

cadBtn.addEventListener('submit', ()=>{
    const oracledb = require('oracledb');
    const dbconfig = require('../DB/dbconfig.js');

    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

        async function run() {
            const connection = await oracledb.getConnection (dbconfig);
            if (!connection) {
                throw new Error('Conexão com o banco de dados não estabelecida');
            }
            const result = await connection.execute(
            `INSERT INTO modestosystem (username, fullname, email, cpf, password)
            VALUES (${usernameCad},${fullnameCad}, ${emailCad}, ${cpfCad}, ${passwordCad})`,
    );

    console.log(result.rows);
    await connection.close();
}
})


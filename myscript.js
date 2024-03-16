// myscript.js

const oracledb = require('oracledb');
const dbconfig = require('./DB/dbconfig');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function run() {

    const connection = await oracledb.getConnection (dbconfig);

    const result = await connection.execute(
        `SELECT sysdate
        FROM dual`,
    );

    console.log(result.rows);
    await connection.close();
}

run();
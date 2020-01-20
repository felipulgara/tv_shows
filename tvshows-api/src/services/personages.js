const sql = require("mssql");
const { config } = require("../config/database");

const getAllPersonages = async () => {
  try {
    let conn = await sql.connect(config);
    let result = await conn.request().query("SELECT * FROM personage");
    sql.close();
    return result.recordset;
  } catch (e) {
    console.log(e);
  }
};

const getPersonage = async id => {
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("id", id)
      .query(`SELECT * FROM personage WHERE id = @id`);
    sql.close();
    return result.recordset;
  } catch (e) {
    console.log(e);
  }
};

const setPersonage = async body => {
  try {
    const { name, gender, id_serie } = body;

    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("name", name)
      .input("gender", gender)
      .input("id_serie", id_serie)
      .query(
        `INSERT INTO personage 
         VALUES(@name,@gender,@id_serie)`
      );
    sql.close();
    return { message: "Personage saved successfully" };
  } catch (e) {
    console.log(e);
  }
};

const updatePersonage = async (id, body) => {
  try {
    const { name, gender, id_serie } = body;
    console.log(body);

    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("name", name)
      .input("gender", gender)
      .input("id_serie", id_serie)
      .input("id", id)
      .query(
        `UPDATE personage SET
         name = @name,
         gender = @gender,
         id_serie = @id_serie
         WHERE id = @id`
      );
    sql.close();
    return { message: "Personage updated successfully" };
  } catch (e) {
    console.log(e);
  }
};

const deletePersonage = async id => {
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("id", id)
      .query(`DELETE FROM personage WHERE id = @id`);
    sql.close();
    return { message: "Personage deleted successfully" };
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllPersonages,
  getPersonage,
  setPersonage,
  updatePersonage,
  deletePersonage
};

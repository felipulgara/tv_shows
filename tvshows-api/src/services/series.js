const sql = require("mssql");
const { config } = require("../config/database");

const getAllSeries = async () => {
  try {
    let conn = await sql.connect(config);
    let result = await conn.request().query("SELECT * FROM serie");
    sql.close();
    return result.recordset;
  } catch (e) {
    console.log(e);
  }
};

const getSerie = async id => {
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("id", id)
      .query(`SELECT * FROM serie WHERE id = @id`);
    sql.close();
    return result.recordset;
  } catch (e) {
    console.log(e);
  }
};

const setSerie = async body => {
  try {
    const { name, release } = body;

    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("name", name)
      .input("release", release)
      .query(
        `INSERT INTO serie 
         VALUES(@name,@release)`
      );
    sql.close();
    return { message: "Serie saved successfully" };
  } catch (e) {
    console.log(e);
  }
};

const updateSerie = async (id, body) => {
  try {
    const { name, release } = body;

    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("name", name)
      .input("release", release)
      .input("id", id)
      .query(
        `UPDATE serie SET
         name = @name,
         release = @release
         WHERE id = @id`
      );
    sql.close();
    return { message: "Serie updated successfully" };
  } catch (e) {
    console.log(e);
  }
};

const deleteSerie = async id => {
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("id", id)
      .query(`DELETE FROM serie WHERE id = @id`);
    sql.close();
    return { message: "Serie deleted successfully" };
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllSeries,
  getSerie,
  setSerie,
  updateSerie,
  deleteSerie
};

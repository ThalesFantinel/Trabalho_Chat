const db = require("./db");
async function registrarUsuario(nick) {
    return await db.insertOne("usuario",{"nick":nick});
}

module.exports = {registrarUsuario}

async function insertOne(collection, objeto){
    const db = await connect();
    return db.collection(collection).insertOne(objeto);
}
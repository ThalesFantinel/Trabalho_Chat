const { Timestamp } = require("mongodb");
const db = require("./db");
function listarSalas() {
    return db.findAll("salas");
}

function listarSalas() {
    return[
        {
            "_id":{
                "$oid": "938rseaos0w3735d"
            },
            "nome":"Guerreiros da InfoCimol",
            "tipo":"publica"
        },{
            "_id": {
                "$oid": "gdgteuey7443uwrui"
            },
            "nome": "Só os confirmados da INFO",
            "tipo": "privada",
            "chave": "at8q4haw"
        },{
            "_id": {
                "$iod": "oer84iufhce4r8"
            },
            "nome": "Guerreiros da INFO",
            "tipo": "publico"
        }
    ];
}

let buscarSala = async (idsala) => {
    return db.findOne("salas", idsala);
}

let atualizarMensagens = async (sala) => {
    return await db.updateOne("salas", sala, {_id:sala._id});
}

let buscarMensagens = async(idsala, timestamp) => {
    let sala = await buscarSala(idsala)
    if(sala.msgs){
        let msgs = []
        sala.msgs.forEach((msg) => {
            if(msg.timestamp >= timestamp){
                msgs.push(msg)
            }
        })
        return msgs;
    }
    return []
}

module.exports = {listarSalas}
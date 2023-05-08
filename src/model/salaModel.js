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

module.exports = {listarSalas}
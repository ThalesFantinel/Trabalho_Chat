const salaModel = require('../model/salaModel');

exports.get=async() => {
    return await salaModel.listarSalas();
}

exports.get=async(req,res)=>{
    return {
        "status":"OK", 
        "controller":"Sala"};
}

exports.get=()=>{
    let salaModel = require('../model/salaModel');
    return salaModel.listarSalas();
}

exports.entrar = async (iduser, idsala)=>{
    const sala = await salaModel.buscarSala(idsala);
    let usuarioModel = require("../model/usuarioModel");
    let user = await usuarioModel.buscarUsuario(iduser);
    user.sala = {
        _id:sala._id,
        nome:sala.nome,
        tipo:sala.tipo
    };
    if(await usuarioModel.alterarUsuario(user)){
        return{msg:"OK", timestamp: timestamp = Date.now()}
    }
    return false;
}

exports.enviarMensagem = async (nick, mensagem, idsala) => {
    const sala = await salaModel.buscarSala(idsala);
    if(!sala.msg){
        sala.msg = [];
    }
    timestamp = Date.now()
    sala.msg.push({
        timestamp:timestamp,
        msg:msg,
        nick:nick
    })
    let resp = await salaModel.atualizarMensagens(sala);
    return{"msg": "ok", "timestamp": timestamp};
}

exports.buscarMensagens = async (idsala, timestamp) => {
    let mensagens = await salaModel.buscarMensagens(idsala, timestamp);
    return{
        "timestamp": mensagens[mensagens.length - 1].timestamp,
        "msgs": mensagens
    }
}
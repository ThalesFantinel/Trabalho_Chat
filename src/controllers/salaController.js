const salaModel = require('../model/salaModel');

exports.get=async() => {
    return await salaModel.listarSalas();
}

exports.get=async(req,res)=>{
    return {"status":"OK", "controller":"Sala"};
}

exports.get=()=>{
    let salaModel = require('../model/salaModel');
    return salaModel.listarSalas();
}
const express = require("express");
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

const router = express.Router();
app.use('/', router.get('/', (req, res) => {
    res.status(200).send("<h1>API - CHAT</h1>")
}));

app.use("/", router.get("/sobre", (req, res, next) => {
    res.status(200).send({
        "nome": "API - CHAT",
        "versão": "0.1.0",
        "autor": "Thales Fantinel"
    })
}))

app.use("/entrar", router.post("/entrar", async(req, res) => {
    const usuarioController = require("./controllers/usuarioController");
    let resp = await usuarioController.entrar(req.body.nick);
    res.status(200).send(resp);
}))

app.use("/salas", router.get("/salas", async(req, res, next) => {
    if(await TokenExpiredError.checkToken(req.headers.token, req,headers.iduser, req.header.nick)){
        let resp = await salaController.get();
        res.status(200).send(resp);
    } else{
        res.status(401).send({msg:"usuário não autorizado"});
    }
}))

app.use("/sala/entrar", router.put("/sala/entrar", async (req, res) => {
    if(!token.checkToken(req.headers.token, req.headers.iduser, req.headers.nick))
    return false;
    let resp = await salaController.entrar(req.query.idsala, req.headers.iduser);
    res.status(200).send(resp);
}))

app.use("/sala/mensagem", router.post("/sala/mensagem", async (req, res) => {
    if(!token.checkToken(req.headers.token, req.headers.iduser, req.headers.nick)) return false;
    let resp = await salaController.enviarMensagem(req.headers.nick, req.body.msg, req.body.idsala);
    res.status(200).send(resp);
}))

app.use("/sala/mensagens", router.get("/sala/mensagens", async(req, res) => {
    if(!token.checkToken(req.headers.token, req.headers.iduser, req.headers.nick)) return false;
    let resp = await salaController.enviarMensagens(req.query.idsala, req.query.timestamp);
    res.status(200).send(resp);
}))

module.exports = app;
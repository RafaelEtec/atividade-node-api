const axios = require("axios");
const NodeCache = require( "node-cache" );

const CACHE = new NodeCache();
var INDEX = 0;

const findCEP = async (req, res) => {
    const { cep } = req.params;
    var regExp = /[a-zA-Z]/g;

    if (cep.length !== 8 || regExp.test(cep)) { return res.json({"error": "CEP inválido"}) };
    
    const response = await requestFromAPI(cep);

    res.json(response);
};

const getEnderecos = (req, res) => {
    const enderecos = [];
    for (let i = 0; i <= INDEX; i++) {
        if (!CACHE.has(i)) { break };
        if (CACHE.get(i) === undefined) { enderecos.push({"id": INDEX, "message": "Endereço não encontrado"}); continue}
        enderecos.push(CACHE.get(i));
    }
    if ( enderecos.length === 0) return res.json({"message": "Sem Endereços salvos"});

    res.json(enderecos);
};

const getEnderecoByID = (req, res) => {
    const { id } = req.params;
    if (CACHE.get(id) === undefined) return res.json({"message": "Endereço não encontrado"});
    res.json(CACHE.get(id));
};

const postEndereco = async (req, res) => {
    const { cep, referencia } = req.body;

    const response = await requestFromAPI(cep);
    const novoEndereco = {"id": INDEX, "referencia": referencia, endereco: response};
    
    CACHE.set(INDEX, novoEndereco); INDEX++;

    res.json(novoEndereco);
}

async function requestFromAPI(cep) {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
}

module.exports = {
    findCEP,
    getEnderecos, getEnderecoByID,
    postEndereco,
};
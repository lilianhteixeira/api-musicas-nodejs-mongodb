const musicas = require("../models/musicaSchema");
const postModel = require('../models/musicasModels');

const getMusicas = (request, response) => {
    const novaMusica = {
        id: musica.id,
        name: musica.name,
        duration_ms: musica.duration_ms,
        preview_url: musica.preview_url
    }
    response.status(200).send(novaMusica)
}

const getMusicasbyId = (request, response) => {
    const id = request.params.id
    const musica = novaListaMusicas.find(item => item.id == id)
    if (musica) {
        response.status(200).send(musica)
    } else {
        response.status(404).send("Música não encontrada!")
    }
}

const addMusica = (request, response) => {
    const { name, duration_ms, preview_url } = request.body;
 
    const novaMusica ={
      
      id:  helper.obterNovoValor(postModel), //utilizando o helper
      name: name,
      duration_ms: duration_ms,
      preview_url: preview_url
    }
 
    postModel.push(novaMusica);
 
    response.status(201).json(novaMusica);
}

const deleteMusica = (request, response) =>{
    const { id } = request.params;
  
    let musicaFiltrada = postModel.filter(musicas => {
      return musicas.id == id;
    });[0];
  
    const index = postModel.indexOf(musicaFiltrada);
    
    postModel.splice(index, 1)
  
    response.json(postModel)
   }
  

const atualizaMusica = (request, response) => {
   const musicaAtualizada = request.body;
   const id = parseInt(request.params.id);
    
   const musicaId = musicas.map(musica => musica.id);

   const atualizaId = musicaId.indexOf(id);

   const musicaIdAtualizada = {id, ...musicaAtualizada}
   musicas.splice(atualizaId, 1, musicaIdAtualizada);
 
   response.status(200).send(musicas.find(musica => musica.id === id));
   console.log(musicas);
}


module.exports = {
    getMusicas,
    getMusicasbyId,
    addMusica,
    deleteMusica, 
    atualizaMusica
}
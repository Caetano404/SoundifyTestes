const Fuse = require('fuse.js');

class Artista {
  constructor(catalogo) {
    if (!Array.isArray(catalogo)) {
      throw new Error('Catálogo de artistas inválido.');
    }
    this.catalogo = catalogo;

    //Fuse.js para fuzzy match
    this.fuse = new Fuse(catalogo, {
      keys: ['nome'],
      threshold: 0.4
    });
  }
  
  buscarArtistasPorNome(nome) {
    if (!nome || nome.trim() === '') {
      throw new Error('Termo de busca é obrigatório.');
    }

    const resultados = this.fuse.search(nome);
    return resultados.map(res => res.item);
  }
}

module.exports = Artista;

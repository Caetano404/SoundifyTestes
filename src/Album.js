const Fuse = require('fuse.js');

class Album {
  constructor(catalogo) {
    if (!Array.isArray(catalogo)) {
      throw new Error('Catálogo de álbuns inválido.');
    }
    this.catalogo = catalogo;

    // Configuração para fuzzy match
    this.fuse = new Fuse(catalogo, {
      keys: ['nome'],
      threshold: 0.4
    });
  }

  buscarAlbumPorNome(nome) {
    if (!nome || nome.trim() === '') {
      throw new Error('Termo de busca é obrigatório.');
    }

    const resultados = this.fuse.search(nome);
    return resultados.map(res => res.item);
  }
}

module.exports = Album;

// Gerenciar catálogo de músicas.

class CatalogoMusica {
  constructor(catalogo = []) {
    this.catalogo = catalogo;
  }

  cadastrarMusica(musica) {
    if (!musica || !musica.titulo || musica.titulo.trim() === '') {
      return 'Título inválido';
    }
    this.catalogo.push(musica);
    return 'Música cadastrada com sucesso';
  }

  buscarMusicaPorNomeExatoOuParcial(tituloBusca) {
    const termo = tituloBusca.toLowerCase();
    return this.catalogo.filter(musica =>
      musica.titulo.toLowerCase().includes(termo)
    );
  }
}

module.exports = CatalogoMusica;
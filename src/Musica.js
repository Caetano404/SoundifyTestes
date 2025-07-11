// Música com artista, título e duração
// Gerencia o cadastro e busca de músicas.
class Musica {

  constructor(artista, titulo, duracao) {
    if (!titulo || titulo.trim() === '') {
      throw new Error('Título da música é obrigatório.');
    }
    if (!artista || artista.trim() === '') {
      throw new Error('Artista é obrigatório.');
    }
    if (!duracao || duracao <= 0) {
      throw new Error('Duração da música deve ser positiva.');
    }

    this.artista = artista;
    this.titulo = titulo;
    this.duracao = duracao;
  }

  reproduzir(player) {
    return player.play(this);
  }
}

module.exports = Musica;
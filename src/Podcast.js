
class Podcast {
  constructor(titulo) {
    if (!titulo || titulo.trim() === '') {
      throw new Error('Título do podcast é obrigatório.');
    }

    this.titulo = titulo;
    this.avaliacao = null;
  }

  avaliarPodcast(nota) {
    if (typeof nota !== 'number' || nota < 1 || nota > 5) {
      return 'Nota inválida';
    }

    this.avaliacao = nota;
    return 'Avaliação registrada com sucesso';
  }

  obterAvaliacao() {
    return this.avaliacao;
  }
}

module.exports = Podcast;
// Valida nomes únicos de playlists no catálogo simulado.

class ValidadorPlaylist {
  constructor(catalogo) {
    if (!Array.isArray(catalogo)) {
      throw new Error('Catálogo inválido.');
    }
    this.catalogo = catalogo;
  }

  validarNomeUnico(nome) {
    if (!nome || nome.trim() === '') {
      return 'Nome da playlist é obrigatório';
    }

    const nomeExiste = this.catalogo.some(
      (playlist) => playlist.nome.toLowerCase() === nome.toLowerCase()
    );

    if (nomeExiste) {
      return 'Nome de playlist já utilizado';
    }

    return 'Nome disponível';
  }
}

module.exports = ValidadorPlaylist;
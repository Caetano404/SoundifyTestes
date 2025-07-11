class Playlist {
  constructor() {
    this.musicas = [];
    this.limiteMaximo = 10000;

    // Guardar nomes únicos de playlists
    this.nomesExistentes = new Set();

    // Guardar playlists como objetos com nome - lista de músicas
    this.playlists = {};
  }

  adicionarMusica(musica) {
    if (this.musicas.length >= this.limiteMaximo) {
      return 'limite máximo de músicas atingido';
    }
    this.musicas.push(musica);
    return 'música adicionada com sucesso';
  }

  totalMusicas() {
    return this.musicas.length;
  }

   //Verifica se a playlist está vazia.
  estaVazia() {
    return this.musicas.length === 0;
  }

   //Retorna a lista completa de músicas.
  obterMusicas() {
    return this.musicas;
  }

  criarPlaylist(nome) {
    if (this.nomesExistentes.has(nome)) {
      return 'Nome de playlist já utilizado';
    }
    this.nomesExistentes.add(nome);
    this.playlists[nome] = [];
    return 'Playlist criada com sucesso';
  }

   // Adiciona uma música à playlist apenas se ela estiver no catálogo fornecido.
  adicionarMusicaComCatalogo(musica, catalogo) {
    if (!catalogo.includes(musica)) {
      return 'Música não encontrada';
    }
    return this.adicionarMusica(musica);
  }

  adicionarMusicaNaPlaylist(nomePlaylist, musica) {
    if (!this.playlists[nomePlaylist]) {
      return 'Playlist não encontrada';
    }
    if (this.playlists[nomePlaylist].length >= this.limiteMaximo) {
      return 'limite máximo de músicas atingido';
    }
    this.playlists[nomePlaylist].push(musica);
    return 'música adicionada com sucesso';
  }

  //Exibe um resumo de uma playlist específica.
  exibirResumo(nomePlaylist) {
    if (!this.playlists[nomePlaylist]) {
      return 'Playlist não encontrada';
    }

    const quantidadeMusicas = this.playlists[nomePlaylist].length;
    const duracaoTotal = quantidadeMusicas * 3; // Supondo 3 min por música

    return {
      nome: nomePlaylist,
      quantidadeMusicas,
      duracaoTotal
    };
  }
}

module.exports = Playlist;
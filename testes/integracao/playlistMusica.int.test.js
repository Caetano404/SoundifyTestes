const Playlist = require('../../src/Playlist.js');

describe('RT-INT-02 - Integração entre criação de playlist e adição de músicas', () => {
  let playlist;

  beforeEach(() => {
    playlist = new Playlist();
  });


  test('CT-INT-03 - Deve criar playlist e adicionar música existente', () => {
    // ENTRADA
    const nomePlaylist = 'Rock Nacional';
    const musica = 'Tempo Perdido';
    const catalogo = ['Tempo Perdido', 'Eduardo e Mônica', 'Ainda é Cedo'];

    // AÇÃO
    const resultadoCriar = playlist.criarPlaylist(nomePlaylist);
    const resultadoAdicionar = playlist.adicionarMusicaComCatalogo(musica, catalogo);

    // SAÍDA
    expect(resultadoCriar).toBe('Playlist criada com sucesso');
    expect(resultadoAdicionar).toBe('música adicionada com sucesso');
    expect(playlist.obterMusicas()).toContain(musica);
  });


  test('CT-INT-04 - Deve impedir adição de música inexistente à playlist', () => {
    // ENTRADA
    const nomePlaylist = 'Rock Nacional';
    const musica = 'Inexistente';
    const catalogo = ['Tempo Perdido', 'Eduardo e Mônica', 'Ainda é Cedo'];

    // AÇÃO
    const resultadoCriar = playlist.criarPlaylist(nomePlaylist);
    const resultadoAdicionar = playlist.adicionarMusicaComCatalogo(musica, catalogo);

    // SAÍDA
    expect(resultadoCriar).toBe('Playlist criada com sucesso');
    expect(resultadoAdicionar).toBe('Música não encontrada');
    expect(playlist.obterMusicas()).not.toContain(musica);
  });
});

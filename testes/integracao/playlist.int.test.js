const Playlist = require('../../src/Playlist.js');

describe('RT-INT-03 - Garantir que, após criar uma playlist, o usuário visualize o resumo correto.', () => {
  let playlist;

  beforeEach(() => {
    playlist = new Playlist();
  });

  test('CT-INT-05 - Mostrar resumo da playlist', () => {
    // ENTRADA
    const nomePlaylist = 'Clássicos do Rock';
    
    // AÇÃO
    const resultadoCriacao = playlist.criarPlaylist(nomePlaylist);
    expect(resultadoCriacao).toBe('Playlist criada com sucesso');

    playlist.adicionarMusicaNaPlaylist(nomePlaylist, 'Tempo Perdido');
    playlist.adicionarMusicaNaPlaylist(nomePlaylist, 'Pro Dia Nascer Feliz');
    playlist.adicionarMusicaNaPlaylist(nomePlaylist, 'Primeiros Erros');

    // SAÍDA
    const resumo = playlist.exibirResumo(nomePlaylist);
    expect(resumo).toEqual({
      nome: nomePlaylist,
      quantidadeMusicas: 3,
      duracaoTotal: 9 // 3 músicas * 3min cada
    });
  });
});

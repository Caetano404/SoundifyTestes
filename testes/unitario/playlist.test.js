const Playlist = require('../../src/Playlist.js');

describe('RT-UNI-03 - Impedir adição de músicas acima do limite permitido de 10000', () => {
  let playlist;

  beforeEach(() => {
    playlist = new Playlist();
  });

  // CT-UNI-06
  test('CT-UNI-06 - Deve impedir adição ao tentar inserir mais de 10000 músicas', () => {
    // ENTRADA
    for (let i = 0; i < 10000; i++) {
      playlist.adicionarMusica(`musica_${i}`);
    }

    // AÇÃO
    const resultado = playlist.adicionarMusica('musica_extra');

    // SAÍDA
    expect(resultado).toBe('limite máximo de músicas atingido');
    expect(playlist.totalMusicas()).toBe(10000);
  });

  // CT-UNI-07
  test('CT-UNI-07 - Deve permitir adicionar 5000 músicas', () => {
    // ENTRADA e AÇÃO
    for (let i = 0; i < 5000; i++) {
      const resultado = playlist.adicionarMusica(`musica_${i}`);
      expect(resultado).toBe('música adicionada com sucesso');
    }

    // SAÍDA
    expect(playlist.totalMusicas()).toBe(5000);
  });

  // CT-UNI-08
  test('CT-UNI-08 - Deve manter playlist vazia com 0 músicas', () => {
    // ENTRADA
    // Nenhuma música adicionada

    // SAÍDA
    expect(playlist.totalMusicas()).toBe(0);
    expect(playlist.estaVazia()).toBe(true);
  });

  // CT-UNI-09
  test('CT-UNI-09 - Deve permitir adicionar 1 música', () => {
    // ENTRADA
    const resultado = playlist.adicionarMusica('musica_1');

    // SAÍDA
    expect(resultado).toBe('música adicionada com sucesso');
    expect(playlist.totalMusicas()).toBe(1);
    expect(playlist.estaVazia()).toBe(false);
  });
});




//------------



describe('RT-UNI-03 - Validar nomes únicos de playlist', () => {
  let playlist;

  beforeEach(() => {
    playlist = new Playlist();
  });

  
  // CT-UNI-06
  test('CT-UNI-06 - Deve impedir criar playlist com nome já existente', () => {
    // ENTRADA
    playlist.criarPlaylist('Favoritas');

    // AÇÃO
    const resultado = playlist.criarPlaylist('Favoritas');

    // SAÍDA
    expect(resultado).toBe('Nome de playlist já utilizado');
  });

  
  // CT-UNI-07
  test('CT-UNI-07 - Deve permitir criar playlist com nome único', () => {
    // ENTRADA
    const resultado = playlist.criarPlaylist('Descobertas da Semana');

    // SAÍDA
    expect(resultado).toBe('Playlist criada com sucesso');
  });
});




describe('RF19 - RT-UNI-01 - Gerenciar playlist personalizada', () => {
  let playlist;

  test('CT-UNI-01 - Criar playlist com nome "Rock Nacional"', () => {
    // ENTRADA e AÇÃO
    playlist = new Playlist('Rock Nacional');

    // SAÍDA
    expect(playlist.nome).toBe('Rock Nacional');
    expect(playlist.estaVazia()).toBe(true);
  });


  test('CT-UNI-02 - Adicionar música "Dias Atrás" à playlist', () => {
    playlist = new Playlist('Rock Nacional');
    // ENTRADA e AÇÃO
    const resultado = playlist.adicionarMusica('Dias Atrás');

    // SAÍDA
    expect(resultado).toBe('música adicionada com sucesso');
    expect(playlist.totalMusicas()).toBe(1);
    expect(playlist.obterMusicas()).toContain('Dias Atrás');
  });


  test('CT-UNI-03 - Remover música "Dias Atrás" da playlist', () => {
    playlist = new Playlist('Rock Nacional');
    playlist.adicionarMusica('Dias Atrás');

    // AÇÃO
    const resultadoRemover = playlist.removerMusica('Dias Atrás');

    // SAÍDA
    expect(resultadoRemover).toBe('musica removida com sucesso');
    expect(playlist.totalMusicas()).toBe(0);
    expect(playlist.estaVazia()).toBe(true);
  });
});


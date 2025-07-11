const ValidadorPlaylist = require('../../src/ValidadorPlaylist.js');
const playlistsMock = require('./mock/playlists.json');

describe('RT-UNI-03 - Validar nomes únicos de playlist', () => {

  // CT-UNI-06
  test('CT-UNI-06 - Deve impedir criação de playlist com nome já existente', () => {
    // ENTRADA
    const nome = 'Favoritas';
    const validador = new ValidadorPlaylist(playlistsMock);

    // AÇÃO
    const resultado = validador.validarNomeUnico(nome);

    // SAÍDA
    expect(resultado).toBe('Nome de playlist já utilizado');
  });
});

  // CT-UNI-07
  test('CT-UNI-07 - Deve permitir criação de playlist com nome único', () => {
    // ENTRADA
    const nome = 'Descobertas da Semana';
    const validador = new ValidadorPlaylist(playlistsMock);

    // AÇÃO
    const resultado = validador.validarNomeUnico(nome);

    // SAÍDA
    expect(resultado).toBe('Nome disponível');
  });


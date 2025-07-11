const Fuse = require('fuse.js');
const Artista = require('../../src/Artista.js');
const catalogo = require('./mock/artistas.json');

describe('RT-UNI-02 - Retornar artistas conforme o termo de pesquisa', () => {
  let artista;

  beforeEach(() => {
    artista = new Artista(catalogo);
  });

  test('CT-UNI-04 - Pesquisa por artista existente', () => {
    // ENTRADA
    const nome = 'Foo Fighters';

    // AÇÃO
    const resultados = artista.buscarArtistasPorNome(nome);

    // SAÍDA
    expect(resultados).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ nome: 'Foo Fighters' })
      ])
    );
  });

  
  test('CT-UNI-05 - Pesquisa por artista não existente', () => {
    // ENTRADA
    const nome = 'The Fighters';

    // AÇÃO
    const resultados = artista.buscarArtistasPorNome(nome);

    // SAÍDA
    expect(resultados.length).toBe(0);
  });


  test('CT-UNI-06 - Pesquisa por nome parcial do artista', () => {
    // ENTRADA
    const nome = 'Foo';

    // AÇÃO
    const resultados = artista.buscarArtistasPorNome(nome);

    // SAÍDA
    expect(resultados).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ nome: 'Foo Fighters' })
      ])
    );
  });
});

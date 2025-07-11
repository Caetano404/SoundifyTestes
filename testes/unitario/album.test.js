const Fuse = require('fuse.js');
const Album = require('../../src/Album.js');
const catalogo = require('./mock/albuns.json');

describe('RT-UNI-03 - Retornar álbuns conforme o termo de pesquisa', () => {
  let album;

  beforeEach(() => {
    album = new Album(catalogo);
  });

  test('CT-UNI-07 - Pesquisa por álbum existente', () => {
    // ENTRADA
    const nome = 'Californication';

    // AÇÃO
    const resultados = album.buscarAlbumPorNome(nome);

    // SAÍDA
    expect(resultados).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ nome: 'Californication' })
      ])
    );
  });


  test('CT-UNI-08 - Pesquisa por álbum inexistente', () => {
    // ENTRADA
    const nome = 'Californicated';

    // AÇÃO
    const resultados = album.buscarAlbumPorNome(nome);

    // SAÍDA
    expect(resultados.length).toBe(0);
  });

  test('CT-UNI-09 - Pesquisa por nome parcial do álbum', () => {
    // ENTRADA
    const nome = 'Californi';

    // AÇÃO
    const resultados = album.buscarAlbumPorNome(nome);

    // SAÍDA
    expect(resultados).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ nome: 'Californication' })
      ])
    );
  });
});

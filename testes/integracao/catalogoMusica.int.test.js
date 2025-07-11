const CatalogoMusica = require('../../src/CatalogoMusica.js');
const Musica = require('../../src/Musica.js');

describe('RT-INT-01 - Cadastro e busca de músicas integrados', () => {
  test('CT-INT-01 - Cadastrar e pesquisar música existente', () => {
    // ENTRADA
    const catalogo = new CatalogoMusica();
    const musica = new Musica('Cazuza', 'Exagerado', 210);

    // AÇÃO
    catalogo.cadastrarMusica(musica);
    const resultadoBusca = catalogo.buscarMusicaPorNomeExatoOuParcial('Exagerado');

    // SAÍDA
    expect(resultadoBusca.length).toBeGreaterThan(0);
    expect(resultadoBusca[0].titulo).toBe('Exagerado');
  });





 test('CT-INT-02 - Pesquisar música inexistente após cadastro', () => {
    // ENTRADA
    const catalogo = new CatalogoMusica();
    const musica = new Musica('Cazuza', 'Exagerado', 210);
    catalogo.cadastrarMusica(musica);

    // AÇÃO
    const resultadoBusca = catalogo.buscarMusicaPorNomeExatoOuParcial('Esagherado');

    // SAÍDA
    expect(resultadoBusca.length).toBe(0);
  });
});

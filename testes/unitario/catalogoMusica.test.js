const CatalogoMusica = require('../../src/CatalogoMusica');
const catalogo = require('./mock/musicasCatalogo.json');

describe('RT-UNI-01 - Retornar nomes de musicas adequados conforme o termo de pesquisa', () => {
  let catalogoMusica;

  beforeEach(() => {
    catalogoMusica = new CatalogoMusica(catalogo);
  });


  test('CT-UNI-01 - Deve retornar lista com musica exata ao buscar por titulo completo', () => {
    // ENTRADA
    const titulo = 'Um Minuto Para o Fim Do Mundo';

    // AÇÃO
    const resultado = catalogoMusica.buscarMusicaPorNomeExatoOuParcial(titulo);

    // SAÍDA
    expect(resultado).toContain('Um Minuto Para o Fim Do Mundo');
    expect(resultado.length).toBeGreaterThanOrEqual(1);
  });


  test('CT-UNI-02 - Deve exibir lista vazia ao buscar por musica inexistente', () => {
    // ENTRADA
    const titulo = 'Dois dias para o fim';

    // AÇÃO
    const resultado = catalogoMusica.buscarMusicaPorNomeExatoOuParcial(titulo);

    // SAÍDA
    expect(resultado.length).toBe(0);
  });


  test('CT-UNI-03 - Deve retornar lista com sugestoes ao buscar por titulo parcial', () => {
    // ENTRADA
    const titulo = 'Um Minuto Para o Fim';

    // AÇÃO
    const resultado = catalogoMusica.buscarMusicaPorNomeExatoOuParcial(titulo);

    // SAÍDA
    expect(resultado).toContain('Um Minuto Para o Fim Do Mundo');
    expect(resultado.length).toBeGreaterThanOrEqual(1);
  });
});

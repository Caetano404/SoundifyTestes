const Busca = require('../../src/Busca');
const catalogo = require('./mock/catalogoFuzzy.json');

describe('RT-UNI-04 - Testar fuzzy match em buscas com erros comuns', () => {
  let busca;

  beforeEach(() => {
    busca = new Busca(catalogo);
  });

 
  
  test('CT-UNI-10 - Deve retornar Michael Jackson ao buscar por "Maicon Jequison"', () => {
    // ENTRADA
    const nome = 'Maicon Jequison';

    // AÇÃO
    const resultado = busca.buscarArtistaPorNomeAproximado(nome);

    // SAÍDA
    expect(resultado).toContain('Michael Jackson');
  });



  test('CT-UNI-11 - Deve retornar System Of A Down ao buscar por "SOAD"', () => {
    // ENTRADA
    const nome = 'SOAD';

    // AÇÃO
    const resultado = busca.buscarArtistaPorNomeAproximado(nome);

    // SAÍDA
    expect(resultado).toContain('System Of A Down');
  });


 
  test('CT-UNI-12 - Deve retornar Metallica ao buscar por "Mettalica"', () => {
    // ENTRADA
    const nome = 'Mettalica';

    // AÇÃO
    const resultado = busca.buscarArtistaPorNomeAproximado(nome);

    // SAÍDA
    expect(resultado).toContain('Metallica');
  });
});

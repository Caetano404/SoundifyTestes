const Recomendacao = require('../../src/Recomendacao');
const musicasCatalogo = require('./mock/musicas.json');

describe('RT-UNI-02 - Gerar recomendações com base no histórico do usuário', () => {

  // Constrói o catálogo no formato "Artista - Título"
  const catalogo = musicasCatalogo.map(m => `${m.artista} - ${m.titulo}`);

  // CT-UNI-04
  test('CT-UNI-04 - Deve gerar recomendações com histórico existente', () => {
    // ENTRADA
    const historico = [
      'Foo Fighters - The Pretender',
      'Foo Fighters - Everlong'
    ];
    const recomendacao = new Recomendacao(catalogo);

    // AÇÃO
    const resultado = recomendacao.gerarRecomendacoes(historico);

    // SAÍDA
    expect(resultado).toContain('Foo Fighters - Best of You');
  });



  
  // CT-UNI-05
  test('CT-UNI-05 - Deve exibir mensagem para histórico insuficiente', () => {
    // ENTRADA
    const historico = [];
    const recomendacao = new Recomendacao(catalogo);

    // AÇÃO
    const resultado = recomendacao.gerarRecomendacoes(historico);

    // SAÍDA
    expect(resultado).toBe('Histórico insuficiente para gerar recomendações');
  });
});

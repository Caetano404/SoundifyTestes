const Podcast = require('../../src/Podcast.js');

describe('RT-UNI-04 - Avaliar podcasts com sistema de estrelas', () => {
  let podcast;

  beforeEach(() => {
    podcast = new Podcast('Nerdcast');
  });

  // CT-UNI-08
  test('CT-UNI-08 - Avaliação válida de podcast', () => {
    // ENTRADA
    const nota = 5;

    // AÇÃO
    const resultado = podcast.avaliarPodcast(nota);

    // SAÍDA
    expect(resultado).toBe('Avaliação registrada com sucesso');
    expect(podcast.obterAvaliacao()).toBe(5);
  });



  // CT-UNI-09
  test('CT-UNI-09 - Avaliação inválida de podcast', () => {
    // ENTRADA
    const nota = 0;

    // AÇÃO
    const resultado = podcast.avaliarPodcast(nota);

    // SAÍDA
    expect(resultado).toBe('Nota inválida');
    expect(podcast.obterAvaliacao()).toBe(null);
  });
});


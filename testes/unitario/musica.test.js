const Musica = require('../../src/Musica');
const Player = require('../../src/Player');
const musicasJson = require('./mock/musicas.json');

describe('RT-UNI-01 - Reproduzir música selecionada', () => {
 test('CT-UNI-01 - Deve reproduzir música válida: "Pitty - Me Adora"', () => {
    // ENTRADA
    const { artista, titulo, duracao } = musicasJson.find(m => m.artista === 'Pitty');
    const musica = new Musica(artista, titulo, duracao);
    const player = new Player();

    // AÇÃO
    const resultado = musica.reproduzir(player);

    // SAÍDA
    expect(resultado).toBe('Reproduzindo: Pitty - Me Adora (3 min 40 s)');
  });



  test('CT-UNI-02 - Não deve permitir música sem título', () => {
    expect(() => new Musica('Pitty', '', 220))
      .toThrow('Título da música é obrigatório.');
  });


  test('CT-UNI-03 - Deve reproduzir música válida: "Green Day - Basket Case"', () => {
    // ENTRADA
    const { artista, titulo, duracao } = musicasJson.find(m => m.artista === 'Green Day');
    const musica = new Musica(artista, titulo, duracao);
    const player = new Player();

    // AÇÃO
    const resultado = musica.reproduzir(player);

    // SAÍDA
    expect(resultado).toBe('Reproduzindo: Green Day - Basket Case (3 min 0 s)');
  });

});

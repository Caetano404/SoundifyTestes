const Usuario = require('../../src/Usuario.js');

describe('RT-INT-02 - Garantir que usuário visualize histórico completo', () => {
  let usuario;

  beforeEach(() => {
  usuario = new Usuario('Jéssica', 'jessica@teste.com', '123456');
  });


test('CT-INT-03 - Exibição do histórico com músicas reproduzidas', () => {
  // ENTRADA
  const musicasReproduzidas = ['Me Adora', 'Equalize'];

  // AÇÃO
  const resultado = usuario.exibirHistorico(musicasReproduzidas);

  // SAÍDA
  expect(Array.isArray(resultado)).toBe(true);
  expect(resultado).toContain('Me Adora');
  expect(resultado).toContain('Equalize');
});



  
  test('CT-INT-04 - Exibição do histórico sem músicas reproduzidas', () => {
    // ENTRADA
    const musicasReproduzidas = [];

    // AÇÃO
    const resultado = usuario.exibirHistorico(musicasReproduzidas);

    // SAÍDA
    expect(resultado).toBe('Nenhum histórico disponível');
  });
});

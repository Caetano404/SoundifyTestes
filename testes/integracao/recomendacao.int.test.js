const Usuario = require('../../src/Usuario.js');
const Recomendacao = require('../../src/Recomendacao.js');

describe('RT-INT-01 - Garantir que recomendações sejam geradas com base no histórico', () => {
  let usuario;
  let recomendacao;

  beforeEach(() => {
    usuario = new Usuario('Jéssica', 'jessica@teste.com', '123456');
    recomendacao = new Recomendacao();
  });

  test('CT-INT-01 - Exibir recomendações semelhantes com o histórico', () => {
    // ENTRADA
    const historico = ['Holiday', 'American Idiot'];

    // AÇÃO
    const historicoExibido = usuario.exibirHistorico(historico);
    expect(historicoExibido).toEqual(historico);

    const recomendacoesGeradas = recomendacao.gerarRecomendacoes(historico);

    // SAÍDA
    expect(Array.isArray(recomendacoesGeradas)).toBe(true);
    expect(recomendacoesGeradas).toContain('Basket Case');
  });





  
  test('CT-INT-02 - Tentar gerar recomendações sem histórico disponível', () => {
    // ENTRADA
    const historicoVazio = [];

    // AÇÃO
    const historicoExibido = usuario.exibirHistorico(historicoVazio);
    expect(historicoExibido).toBe('Nenhum histórico disponível');

    const recomendacoesGeradas = recomendacao.gerarRecomendacoes(historicoVazio);

    // SAÍDA
    expect(recomendacoesGeradas).toBe('Histórico insuficiente para recomendações');
  });
});

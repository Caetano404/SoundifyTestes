class Recomendacao {
  constructor(catalogo) {
    this.catalogo = catalogo;
  }

  gerarRecomendacoes(historico) {
    if (!historico || historico.length < 1) {
      return 'Histórico insuficiente para gerar recomendações';
    }

    const artistas = historico.map(m => m.split(' - ')[0]);
    const artistaMaisOuvido = artistas[0];

    // Filtra músicas do catálogo para o mesmo artista e remove as já ouvidas
    const sugestoes = this.catalogo.filter(musica =>
      musica.startsWith(`${artistaMaisOuvido} -`) &&
      !historico.includes(musica)
    );

    return sugestoes.length > 0
      ? sugestoes
      : `nenhuma sugestao encontrada para ${artistaMaisOuvido}`;
  }
}

module.exports = Recomendacao;
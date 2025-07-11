function formatarDuracao(segundos) {
  const min = Math.floor(segundos / 60);
  const sec = segundos % 60;
  return `${min} min ${sec} s`;
}

class Player {
  play(musica) {
    const duracaoFormatada = formatarDuracao(musica.duracao);
    return `Reproduzindo: ${musica.artista} - ${musica.titulo} (${duracaoFormatada})`;
  }
}

//recebe Musica com duração definida e formata em minutos e segundos

module.exports = Player;
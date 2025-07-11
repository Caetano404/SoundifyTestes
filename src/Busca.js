// Simula fuzzy match em músicas, artistas ou playlists

class Busca {
  constructor(catalogo) {
    this.catalogo = catalogo;
  }

  buscarArtistaPorNomeAproximado(nomeBusca) {
    const nomeNormalizado = nomeBusca.toLowerCase();
    return this.catalogo.artistas.filter(artista => {
      const artistaLower = artista.toLowerCase();
      return (
        artistaLower.includes(nomeNormalizado) ||
        this.similaridade(artistaLower, nomeNormalizado) >= 0.3
      );
    });
  }

  //Cálculo de similaridade com base em interseção de caracteres.
  //Similaridade propositalmente limitada 
   
  similaridade(a, b) {
    const setA = new Set(a);
    const setB = new Set(b);
    const intersecao = new Set([...setA].filter(c => setB.has(c)));
    return intersecao.size / Math.max(setA.size, setB.size);
  }
}

module.exports = Busca;
class Usuario {

  constructor(nome, email, senha) {
    if (!nome || !email || !senha) {
      throw new Error('Nome, email e senha são obrigatórios.');
    }

    this.nome = nome;
    this.email = email;
    this.senha = senha;

    // Histórico de músicas ouvidas
    this.historico = [];
  }

  editarPerfil(novoNome, novoEmail) {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(novoEmail);

    if (!emailValido) {
      return 'Formato de email inválido';
    }

    this.nome = novoNome;
    this.email = novoEmail;
    return 'Perfil atualizado com sucesso';
  }

  exibirHistorico() {
    if (!this.historico || this.historico.length === 0) {
      return 'Nenhum histórico disponível';
    }
    return this.historico;
  }

  static cadastrarUsuario(nome, email, senha) {
    return new Usuario(nome, email, senha);
  }

  autenticar(senhaInformada) {
    if (this.senha === senhaInformada) {
      return 'Usuário autenticado com sucesso';
    }
    return 'Senha incorreta';
  }

  registrarHistorico(tituloMusica) {
    if (tituloMusica && tituloMusica.trim() !== '') {
      this.historico.push(tituloMusica);
    }
  }
}

module.exports = Usuario;
const Usuario = require('../../src/Usuario.js');

describe('RT-UNI-05 - Editar dados de perfil do usuário', () => {
  
  // CT-UNI-10
  test('CT-UNI-10 - Deve atualizar perfil com dados válidos', () => {
    // ENTRADA
    const usuario = new Usuario('Usuário Original', 'original@email.com');
    const novoNome = 'Novo Nome';
    const novoEmail = 'novo@email.com';

    // AÇÃO
    const resultado = usuario.editarPerfil(novoNome, novoEmail);

    // SAÍDA
    expect(resultado).toBe('Perfil atualizado com sucesso');
    expect(usuario.nome).toBe('Novo Nome');
    expect(usuario.email).toBe('novo@email.com');
  });

  // CT-UNI-11
  test('CT-UNI-11 - Deve exibir erro para email inválido ao editar perfil', () => {
    // ENTRADA
    const usuario = new Usuario('Usuário Original', 'original@email.com');
    const novoNome = 'Outro Nome';
    const novoEmail = 'email_invalido';

    // AÇÃO
    const resultado = usuario.editarPerfil(novoNome, novoEmail);

    // SAÍDA
    expect(resultado).toBe('Formato de email inválido');
    expect(usuario.nome).toBe('Usuário Original');
    expect(usuario.email).toBe('original@email.com');
  });
});



describe('RT-UNI-02 - Listar histórico de músicas reproduzidas', () => {
  let usuario;

  beforeEach(() => {
    usuario = new Usuario('Jéssica', 'jessica@email.com');
  });

  // CT-UNI-04
  test('CT-UNI-04 - Deve exibir histórico com músicas reproduzidas', () => {
    // ENTRADA
    const historico = ['Primeiros Erros', 'Depois da Meia Noite'];

    // AÇÃO
    const resultado = usuario.exibirHistorico(historico);

    // SAÍDA
    expect(resultado).toEqual(['Primeiros Erros', 'Depois da Meia Noite']);
  });

  // CT-UNI-05
  test('CT-UNI-05 - Deve exibir mensagem para histórico vazio', () => {
    // ENTRADA
    const historico = [];

    // AÇÃO
    const resultado = usuario.exibirHistorico(historico);

    // SAÍDA
    expect(resultado).toBe('Nenhum histórico disponível');
  });
});





describe('RT-UNI-05 - Editar dados de perfil do usuário', () => {
  let usuario;

  beforeEach(() => {
    usuario = new Usuario('Nome Antigo', 'email@antigo.com');
  });

  // CT-UNI-10 - Editar perfil com dados válidos
  test('CT-UNI-10 - Deve atualizar o perfil com nome e email válidos', () => {
    // ENTRADA
    const novoNome = 'Novo Nome';
    const novoEmail = 'novo@email.com';

    // AÇÃO
    const resultado = usuario.editarPerfil(novoNome, novoEmail);

    // SAÍDA
    expect(resultado).toBe('Perfil atualizado com sucesso');
    expect(usuario.nome).toBe(novoNome);
    expect(usuario.email).toBe(novoEmail);
  });

  // CT-UNI-11 - Editar perfil com e-mail inválido
  test('CT-UNI-11 - Deve retornar erro para formato de email inválido', () => {
    // ENTRADA
    const novoNome = 'Outro Nome';
    const emailInvalido = 'email_invalido';

    // AÇÃO
    const resultado = usuario.editarPerfil(novoNome, emailInvalido);

    // SAÍDA
    expect(resultado).toBe('Formato de email inválido');
    // Dados não devem ser atualizados
    expect(usuario.nome).not.toBe('Outro Nome');
    expect(usuario.email).not.toBe(emailInvalido);
  });
});

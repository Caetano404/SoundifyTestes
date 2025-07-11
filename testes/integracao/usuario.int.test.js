const Usuario = require('../../src/Usuario.js');

describe('RT-INT-01 - Garantir que, após cadastro, o usuário consiga autenticar-se', () => {
  
  // CT-INT-01
  test('CT-INT-01 - Cadastro e autenticação com credenciais corretas', () => {
    // ENTRADA
    const email = 'jessica@teste.com';
    const senha = '123456';
    const nome = 'Jéssica';

    // AÇÃO
    const usuarioCadastrado = Usuario.cadastrarUsuario(nome, email, senha);
    const resultado = usuarioCadastrado.autenticar('123456');

    // SAÍDA
    expect(resultado).toBe('Usuário autenticado com sucesso');
  });

  // CT-INT-02
  test('CT-INT-02 - Cadastro e tentativa de autenticação com senha incorreta', () => {
    // ENTRADA
    const email = 'jessica@teste.com';
    const senha = '123456';
    const nome = 'Jéssica';

    // AÇÃO
    const usuarioCadastrado = Usuario.cadastrarUsuario(nome, email, senha);
    const resultado = usuarioCadastrado.autenticar('%f56b');

    // SAÍDA
    expect(resultado).toBe('Senha incorreta');
  });
});




const CatalogoMusica = require('../../src/CatalogoMusica.js');

describe('RT-INT-02 - Integração reprodução e histórico', () => {
  let usuario;
  let catalogo;

  beforeEach(() => {
    // ENTRADA: Inicializando usuário autenticado e catálogo com músicas
    usuario = new Usuario('Jéssica', 'jessica@teste.com', '123456');
    catalogo = new CatalogoMusica(['Equalize', 'Dias Atrás']);
  });

  test('CT-INT-03 - Reproduzir música e registrar no histórico', () => {
    // ENTRADA
    const titulo = 'Equalize';

    // AÇÃO
    const resultadoBusca = catalogo.buscarMusicaPorNomeExatoOuParcial(titulo);
    if (resultadoBusca.length > 0) {
      usuario.registrarHistorico(resultadoBusca[0]);
    }

    // SAÍDA
    const historico = usuario.exibirHistorico();
    expect(historico).toContain('Equalize');
  });

  test('CT-INT-04 - Tentar reproduzir música inexistente e verificar histórico', () => {
    // ENTRADA
    const titulo = 'Inexistente';

    // AÇÃO
    const resultadoBusca = catalogo.buscarMusicaPorNomeExatoOuParcial(titulo);
    if (resultadoBusca.length > 0) {
      usuario.registrarHistorico(resultadoBusca[0]);
    }

    // SAÍDA
    const historico = usuario.exibirHistorico();
    expect(historico).toBe('Nenhum histórico disponível');
  });
});

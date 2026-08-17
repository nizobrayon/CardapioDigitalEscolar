import "./Login.css";

function LoginAluno() {
  return (
    <div className="loginContainer">
      <div className="login-box">

        <h1>Cardápio Digital Escolar</h1>

        <p className="login-subtitle">
          Entre na sua conta
        </p>

        <p className="login-subtitle">
          Aluno
        </p>

          <div className="input-group">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="input-group">
            <label>RA do Aluno </label>
            <input
              type="RA"
              placeholder="Digite seu RA"
            />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
            />
          </div>
          <div class="container">
            <button>Botão 1</button>
            <button>Botão 2</button>
          </div>

          <button type="submit">
            Entrar
          </button>

        <p className="cadastro-text">
          Ainda não possui uma conta?
          <a href="/"> Cadastre-se</a>
        </p>

      </div>
    </div>
  );
}

export default LoginAluno;
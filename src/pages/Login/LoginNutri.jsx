import "./Login.css";

function LoginNutri() {
  return (
    <div className="loginContainer">
      <div className="login-box">

        <h1>Jardim Secreto</h1>

        <p className="login-subtitle">
          Entre na sua conta
        </p>

          <div className="input-group">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
            />
          </div>

          <button type="submit">
            Entrar
          </button>

        <p className="cadastro-text">
          Ainda não possui uma conta?
          <a href="../Cadastro/Cadastro.jsx"> Cadastre-se</a>
        </p>

      </div>
    </div>
  );
}

export default LoginNutri;
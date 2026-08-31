import { Link } from "react-router-dom";
import "./Login.css";

function LoginAluno() {
  return (
    <div className="loginContainer">
      <div className="login-box">

        <h1>Cardápio Digital Escolar</h1>

        <p className="login-subtitle">
          Entre na sua conta
        </p>

        <p className="login-subtitle2">
          ALUNO
        </p>

        <div className="input-group">
          <label>E-mail</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div className="input-group">
          <label>RA do Aluno</label>
          <input
            type="text"
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

        <div className="container">
          <Link to="/LoginAluno">
          <button>Aluno</button>
          </Link>

         <Link to="/loginNutri">
          <button>Nutricionista</button>
         </Link>
          </div>

        <Link to="/home">
        <button type="submit"> Entrar </button>
        </Link>
        
        <p className="cadastro-text">
          Ainda não possui uma conta?
          <a href="/cadastro"> Cadastre-se</a>
        </p>

      </div>
    </div>
  );
}

export default LoginAluno;
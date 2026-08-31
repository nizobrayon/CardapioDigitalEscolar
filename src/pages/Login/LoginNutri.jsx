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
          NUTRICIONISTA
        </p>

          <div className="input-group">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="input-group">
            <label>CRN do Nutricionista </label>
            <input
              type="text"
              placeholder="Digite seu CRN"
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
          <Link to="/loginAluno">
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
           Ainda não possui uma conta?{" "}
          <Link to="/cadastro">Cadastre-se</Link>
        </p>

      </div>
    </div>
  );
}

export default LoginAluno;
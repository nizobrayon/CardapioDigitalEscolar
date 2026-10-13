
import { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Login/Login.css";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("aluno");
  const [raAluno, setRaAluno] = useState("");
  const [crnNutricionista, setCrnNutricionista] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function cadastrarUsuario(event) {
    event.preventDefault();
    setMensagem("");

    if (senha !== confirmarSenha) {
      setMensagem("As senhas não são iguais!");
      return;
    }

    if (senha.length < 6) {
      setMensagem("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (tipoUsuario === "aluno" && !raAluno.trim()) {
      setMensagem("Informe o RA do aluno.");
      return;
    }

    if (
      tipoUsuario === "nutricionista" &&
      !crnNutricionista.trim()
    ) {
      setMensagem("Informe o CRN do nutricionista.");
      return;
    }

    // Dados que serão enviados para o backend
    const dadosUsuario = {
      nomeUsuario: nome.trim(),
      emailUsuario: email.trim(),
      senha: senha,
      tipoUsuario: tipoUsuario,
    };

    // Adiciona o RA quando o usuário for aluno
    if (tipoUsuario === "aluno") {
      dadosUsuario.raAluno = raAluno.trim();
    }

    // Adiciona o CRN quando o usuário for nutricionista
    if (tipoUsuario === "nutricionista") {
      dadosUsuario.crnNutricionista = crnNutricionista.trim();
    }

    try {
      setCarregando(true);

      const resposta = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosUsuario),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          dados.mensagem || "Não foi possível cadastrar."
        );
      }

      setMensagem(
        dados.mensagem || "Usuário cadastrado com sucesso!"
      );

      // Limpa os campos após o cadastro
      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");
      setRaAluno("");
      setCrnNutricionista("");
      setTipoUsuario("aluno");
    } catch (erro) {
      setMensagem(
        erro.message === "Failed to fetch"
          ? "Não foi possível conectar ao servidor. Verifique se a API está ligada."
          : erro.message
      );
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="loginContainer">
      <div className="login-box">
        <h1>Cardápio Digital Escolar</h1>

        <p className="login-subtitle-cadastro">
          Cadastre-se
        </p>

        <form onSubmit={cadastrarUsuario}>
          <div className="input-group">
            <label htmlFor="nome">Nome de Usuário</label>
            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              minLength={6}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmarSenha">
              Confirme sua senha
            </label>
            <input
              id="confirmarSenha"
              type="password"
              placeholder="Confirme a senha"
              value={confirmarSenha}
              onChange={(e) =>
                setConfirmarSenha(e.target.value)
              }
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="tipoUsuario">
              Tipo de usuário
            </label>
            <select
              id="tipoUsuario"
              value={tipoUsuario}
              onChange={(e) =>
                setTipoUsuario(e.target.value)
              }
            >
              <option value="aluno">Aluno</option>
              <option value="nutricionista">
                Nutricionista
              </option>
            </select>
          </div>

          {tipoUsuario === "aluno" && (
            <div className="input-group">
              <label htmlFor="raAluno">RA do aluno</label>
              <input
                id="raAluno"
                type="text"
                inputMode="numeric"
                placeholder="Digite seu RA"
                value={raAluno}
                onChange={(e) =>
                  setRaAluno(e.target.value)
                }
                required
              />
            </div>
          )}

          {tipoUsuario === "nutricionista" && (
            <div className="input-group">
              <label htmlFor="crnNutricionista">CRN</label>
              <input
                id="crnNutricionista"
                type="text"
                inputMode="numeric"
                placeholder="Digite seu CRN"
                value={crnNutricionista}
                onChange={(e) =>
                  setCrnNutricionista(e.target.value)
                }
                required
              />
            </div>
          )}

          {mensagem && (
            <p
              className="mensagem-cadastro"
              role="status"
            >
              {mensagem}
            </p>
          )}

          <button type="submit" disabled={carregando}>
            {carregando ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>

        <p className="cadastro-text">
          Já possui uma conta?{" "}
          <Link to="/loginaluno">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;

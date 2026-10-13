import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Perfil.css";

function Perfil() {
  const location = useLocation();
  const navigate = useNavigate();

  const usuarioLogin = location.state?.usuario;

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [ra, setRa] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [editando, setEditando] = useState(false);

  // Busca os dados do aluno no banco de dados
  useEffect(() => {
    async function buscarPerfil() {
      if (!usuarioLogin?.idusuario) {
        setMensagem("Não foi possível identificar sua conta. Faça login novamente.");
        setCarregando(false);
        return;
      }

      try {
        const resposta = await fetch(
          `http://localhost:3000/usuarios/${usuarioLogin.idusuario}`
        );

        const dados = await resposta.json();

        if (!resposta.ok) {
          throw new Error(dados.mensagem || "Erro ao buscar perfil.");
        }

        setNome(dados.usuario.nomeusuario || "");
        setEmail(dados.usuario.emailusuario || "");
        setRa(dados.usuario.raaluno || "");
      } catch (erro) {
        setMensagem(
          erro.message === "Failed to fetch"
            ? "Não foi possível conectar ao servidor."
            : erro.message
        );
      } finally {
        setCarregando(false);
      }
    }

    buscarPerfil();
  }, [usuarioLogin?.idusuario]);

  // Salva as alterações no banco de dados
  async function salvarAlteracoes(event) {
    event.preventDefault();
    setMensagem("");

    if (!usuarioLogin?.idusuario) {
      setMensagem("Faça login novamente para alterar seus dados.");
      return;
    }

    try {
      const resposta = await fetch(
        `http://localhost:3000/usuarios/${usuarioLogin.idusuario}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nomeUsuario: nome,
            emailUsuario: email,
            raAluno: ra,
          }),
        }
      );

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.mensagem || "Erro ao atualizar perfil.");
      }

      setNome(dados.usuario.nomeusuario || "");
      setEmail(dados.usuario.emailusuario || "");
      setRa(dados.usuario.raaluno || "");
      setMensagem("Dados atualizados com sucesso!");
      setEditando(false);
    } catch (erro) {
      setMensagem(
        erro.message === "Failed to fetch"
          ? "Não foi possível conectar ao servidor."
          : erro.message
      );
    }
  }

  // Exclui a conta do aluno
  async function excluirConta() {
    const confirmar = window.confirm(
      "Tem certeza de que deseja excluir sua conta? Essa ação não poderá ser desfeita."
    );

    if (!confirmar) return;

    if (!usuarioLogin?.idusuario) {
      setMensagem("Não foi possível identificar sua conta. Faça login novamente.");
      return;
    }

    try {
      const resposta = await fetch(
        `http://localhost:3000/usuarios/${usuarioLogin.idusuario}`,
        {
          method: "DELETE",
        }
      );

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.mensagem || "Erro ao excluir conta.");
      }

      window.alert("Conta excluída com sucesso!");
      navigate("/loginaluno", { replace: true });
    } catch (erro) {
      setMensagem(
        erro.message === "Failed to fetch"
          ? "Não foi possível conectar ao servidor."
          : erro.message
      );
    }
  }

  if (carregando) {
    return <div className="perfil-container">Carregando perfil...</div>;
  }

  return (
    <div className="perfil-container">
      <div className="perfil-card">
        <h1>Meu Perfil</h1>
        <p>Consulte e altere seus dados pessoais.</p>

        {mensagem && <p role="status">{mensagem}</p>}

        <form onSubmit={salvarAlteracoes}>
          <label htmlFor="nome">Nome completo</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            disabled={!editando}
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!editando}
            required
          />

          <label htmlFor="ra">RA do aluno</label>
          <input
            id="ra"
            type="text"
            value={ra}
            onChange={(e) => setRa(e.target.value)}
            disabled={!editando}
            required
          />

          {!editando ? (
            <button
              type="button"
              onClick={() => {
                setMensagem("");
                setEditando(true);
              }}
            >
              Editar dados
            </button>
          ) : (
            <>
              <button type="submit">Salvar alterações</button>

              <button
                type="button"
                onClick={() => {
                  setNome(usuarioLogin?.nomeusuario || nome);
                  setEmail(usuarioLogin?.emailusuario || email);
                  setRa(usuarioLogin?.raaluno || ra);
                  setMensagem("");
                  setEditando(false);
                }}
              >
                Cancelar
              </button>
            </>
          )}
        </form>

        <button
          type="button"
          className="botao-excluir"
          onClick={excluirConta}
        >
          Excluir minha conta
        </button>

        <Link to="/home" className="voltar-home">
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}

export default Perfil;
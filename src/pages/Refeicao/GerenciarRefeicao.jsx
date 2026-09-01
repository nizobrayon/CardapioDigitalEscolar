import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./CriarRefeicao.css";

function GerenciarRefeicao() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [nomeRefeicao, setNomeRefeicao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    buscarRefeicao();
  }, [id]);

  async function buscarRefeicao() {
    try {

      const resposta = await fetch(
        `http://localhost:3000/refeicoes/${id}`
      );

      if (!resposta.ok) {
        throw new Error("Erro ao buscar refeição");
      }

      const dados = await resposta.json();

      console.log("Refeição recebida:", dados);

      setNomeRefeicao(
        dados.nomeRefeicao || dados.nomerefeicao || ""
      );

      setDescricao(
        dados.descricao || ""
      );

      setCategoria(
        dados.categoria || ""
      );

    } catch (error) {

      console.error(error);
      alert("Erro ao carregar refeição.");

    }
  }

  async function salvarAlteracoes(e) {

    e.preventDefault();

    try {

      const resposta = await fetch(
        `http://localhost:3000/refeicoes/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            nomeRefeicao,
            descricao,
            categoria
          })
        }
      );

      if (!resposta.ok) {
        throw new Error("Erro ao atualizar");
      }

      alert("Refeição atualizada com sucesso!");

      navigate("/cardapio");

    } catch (error) {

      console.error(error);
      alert("Erro ao atualizar refeição.");

    }
  }

  return (
    <div className="pagina-gerenciar">

      <header className="cabecalho">

        <div className="logo">
          🍽️ Cantina Escola
        </div>

        <nav>

          <Link to="/">
            Início
          </Link>

          <Link to="/cardapio">
            Cardápio
          </Link>

          <Link to="/avaliar">
            Avaliar
          </Link>

          <Link to="/sugerir">
            Sugerir
          </Link>

        </nav>

      </header>


      <main className="gerenciar">

        <h1>Gerenciar refeição</h1>

        <p>
          Edite as informações da refeição.
        </p>


        <form onSubmit={salvarAlteracoes}>

          <label>
            Nome da refeição
          </label>

          <input
            type="text"
            value={nomeRefeicao}
            onChange={(e) =>
              setNomeRefeicao(e.target.value)
            }
          />


          <label>
            Descrição
          </label>

          <textarea
            value={descricao}
            onChange={(e) =>
              setDescricao(e.target.value)
            }
          />


          <label>
            Categoria
          </label>

          <input
            type="text"
            value={categoria}
            onChange={(e) =>
              setCategoria(e.target.value)
            }
          />


          <div className="botoes">

            <button
              type="button"
              className="cancelar"
              onClick={() => navigate("/cardapio")}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="salvar"
            >
              Salvar alterações
            </button>

          </div>

        </form>

      </main>


      <footer>
        © 2026 Cantina Escola - Cardápio Escolar Digital
      </footer>

    </div>
  );
}

export default GerenciarRefeicao;
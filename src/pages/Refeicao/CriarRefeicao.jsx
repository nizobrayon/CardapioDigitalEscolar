import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";
import "./CriarRefeicao.css";

function CriarRefeicao() {
  const [nomeRefeicao, setNomeRefeicao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  const navigate = useNavigate();

  async function handleCriarRefeicao(event) {
    event.preventDefault();

    try {
      await api.post("/refeicoes", {
        nomeRefeicao: nomeRefeicao,
        descricao: descricao,
        categoria: categoria,
      });

      alert("Cadastro realizado com sucesso!");

      navigate("/cardapio");
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(
          error.response.data.mensagem ||
            "Erro ao realizar cadastro."
        );
      } else {
        alert("Não foi possível conectar ao servidor.");
      }
    }
  }

  return (
    <div className="criar-page">

      {/* HEADER */}

      <header className="header">

        <div className="logo">
          🌿 Jardim Secreto
        </div>

        <nav className="menu">

          <Link to="/">
            Início
          </Link>

          <Link
            to="/cardapio"
            className="active"
          >
            Cardápio
          </Link>

          <Link to="#">
            Avaliar
          </Link>

          <Link to="#">
            Sugerir
          </Link>

        </nav>

      </header>


      {/* FORMULÁRIO */}

      <main className="criar-container">

        <Link
          to="/cardapio"
          className="voltar"
        >
          ← Voltar para o cardápio
        </Link>


        <div className="form-box">

          <h1>Criar refeição</h1>

          <p className="form-subtitle">
            Cadastre uma nova refeição no cardápio escolar.
          </p>


          <form onSubmit={handleCriarRefeicao}>

            {/* NOME */}

            <div className="campo">

              <label htmlFor="nomeRefeicao">
                Nome da refeição
              </label>

              <input
                id="nomeRefeicao"
                type="text"
                placeholder="Ex: Arroz, feijão e frango"
                value={nomeRefeicao}
                onChange={(event) =>
                  setNomeRefeicao(event.target.value)
                }
                required
              />

            </div>


            {/* DESCRIÇÃO */}

            <div className="campo">

              <label htmlFor="descricao">
                Descrição
              </label>

              <textarea
                id="descricao"
                placeholder="Descreva os alimentos que fazem parte da refeição..."
                rows="5"
                value={descricao}
                onChange={(event) =>
                  setDescricao(event.target.value)
                }
                required
              />

            </div>


            {/* CATEGORIA */}

            <div className="campo">

              <label htmlFor="categoria">
                Categoria
              </label>

              <input
                id="categoria"
                type="text"
                placeholder="Ex: Janta, Almoço, Café da Manhã..."
                value={categoria}
                onChange={(event) =>
                  setCategoria(event.target.value)
                }
                required
              />

            </div>


            {/* BOTÕES */}

            <div className="form-buttons">

              <Link
                to="/cardapio"
                className="btn-cancelar"
              >
                Cancelar
              </Link>

              <button
                type="submit"
                className="btn-salvar"
              >
                Criar refeição
              </button>

            </div>

          </form>

        </div>

      </main>


      {/* FOOTER */}

      <footer className="footer">
        <p>Cardápio Escolar © 2026</p>
      </footer>

    </div>
  );
}

export default CriarRefeicao;
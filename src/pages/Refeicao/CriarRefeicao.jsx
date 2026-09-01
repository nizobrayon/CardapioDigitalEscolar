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
      // Envia os dados para o backend
      api.post("/refeicoes", {
        nomeRefeicao: nomeRefeicao,
        descricao: descricao,
        categoria: categoria,
      }).then(() => {
        alert("Cadastro realizado com sucesso!");
        // Depois do cadastro, vai para o login
        navigate("/cardapio");
      }).catch(() => {
        alert("Erro ao realizar o cadastro");
      })

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

        <Link to="/" className="logo">
          <span>🍽️</span>
          Cantina Escola
        </Link>

        <nav className="menu">

          <Link to="/">Início</Link>

          <Link to="/cardapio" className="active">
            Cardápio
          </Link>

          <Link to="#">Avaliar</Link>

          <Link to="#">Sugerir</Link>

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

              <label>
                Nome da refeição
              </label>

              <input
                type="text"
                placeholder="Ex: Arroz, feijão e frango"
                value={nomeRefeicao}
                onChange={(event) =>
                  setNomeRefeicao(event.target.value)
                }

              />

            </div>


            {/* DESCRIÇÃO */}

            <div className="campo">

              <label>
                Descrição
              </label>

              <textarea
                placeholder="Descreva os alimentos que fazem parte da refeição..."
                rows="5"

                value={descricao}
                onChange={(event) =>
                setDescricao(event.target.value)
                }
                />

            </div>


            {/* CATEGORIA */}

            <div className="campo">

              <label>
                Categoria
              </label>

              <input
                type="text"
                placeholder="Ex: Janta, Almoço, Café da Manhã, etc..."
                value={categoria}
                onChange={(event) =>
                  setCategoria(event.target.value)
                }

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
                type="submmit"
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
        © 2026 Cantina Escola - Cardápio Escolar Digital
      </footer>

    </div>
  );
}

export default CriarRefeicao;
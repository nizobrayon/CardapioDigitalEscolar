import { Link } from "react-router-dom";
import "./CriarRefeicao.css";
import api from "../../services/api";

function CriarRefeicao() {

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


          <form>

            {/* NOME */}

            <div className="campo">

              <label>
                Nome da refeição
              </label>

              <input
                type="text"
                placeholder="Ex: Arroz, feijão e frango"
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
              ></textarea>

            </div>


            {/* CATEGORIA */}

            <div className="campo">

              <label>
                Categoria
              </label>

              <select>



              </select>

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
                type="button"
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
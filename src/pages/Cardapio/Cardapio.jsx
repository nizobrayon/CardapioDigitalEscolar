import { Link } from "react-router-dom";
import "./Cardapio.css";

function Cardapio() {
  return (
    <div className="cardapio-page">

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


      {/* CONTEÚDO */}
      <main className="cardapio-container">

        <div className="cardapio-title">

          <div>
            <h1>Cardápio</h1>

            <p>
              Gerencie as refeições do cardápio escolar.
            </p>
          </div>

          <Link
            to="/criar-refeicao"
            className="btn-criar"
          >
            + Criar refeição
          </Link>

        </div>

      </main>


      {/* FOOTER */}
      <footer className="footer">
        © 2026 Cantina Escola - Cardápio Escolar Digital
      </footer>

    </div>
  );
}

export default Cardapio;
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* CABEÇALHO */}
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🍽️</span>
          <span>Cantina Escola</span>
        </div>

        <nav className="menu">
          <a href="#">Início</a>
          <Link to ="/cardapio">
          Cardápio
          </Link>
          <a href="#">Avaliar</a>
          <a href="#">Sugerir</a>
        </nav>
      </header>

      {/* ÁREA PRINCIPAL */}
      <main className="main-content">
        {/* O conteúdo do Cardápio poderá entrar aqui depois */}
      </main>

      {/* RODAPÉ */}
      <footer className="footer">
        © 2026 Cantina Escola - Cardápio Escolar Digital
      </footer>

    </div>
  );
}

export default Home;
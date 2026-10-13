
import "./Home.css";
import { Link, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const usuario = location.state?.usuario;

  const nomeUsuario = usuario?.nomeusuario || "Meu perfil";

  return (
    <div className="home">
      {/* CABEÇALHO */}
      <header className="header">
        <div className="logo">
          <span>Cantina Digital Escolar</span>
        </div>

        <nav className="menu">
          <Link to="/home">Início</Link>
          <Link to="/cardapio">Cardápio</Link>
          <Link to="/avaliar">Avaliar</Link>
          <Link to="/sugerir">Sugerir</Link>
        </nav>

        {/* PERFIL DO USUÁRIO */}
        <Link to="/perfil" className="perfil">
          <div className="perfil-icone">
            <span>👤</span>
          </div>

          <div className="perfil-info">
            <span className="perfil-nome">{nomeUsuario}</span>
            <span className="perfil-texto">Meu perfil</span>
          </div>
        </Link>
      </header>

      {/* ÁREA PRINCIPAL */}
      <main className="main-content">
        {/* O conteúdo do cardápio poderá entrar aqui */}
      </main>

      {/* RODAPÉ */}
      <footer className="footer"></footer>
    </div>
  );
}

export default Home;

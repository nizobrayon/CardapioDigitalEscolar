import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginAluno from "./pages/Login/LoginAluno";
import Cadastro from "./pages/Cadastro";
import LoginNutri from "./pages/Login/LoginNutri";
import Home from "./pages/Home/Home";
import Cardapio from "./pages/Cardapio/Cardapio";
import CriarRefeicao from "./pages/Refeicao/CriarRefeicao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/criar-refeicao" element={<CriarRefeicao />} />
        <Route path="/loginAluno" element={<LoginAluno />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/loginNutri" element={<LoginNutri />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
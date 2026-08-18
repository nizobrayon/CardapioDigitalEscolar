import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginAluno from "./pages/Login/LoginAluno";
import Cadastro from "./pages/Cadastro";
import LoginNutri from "./pages/Login/LoginNutri";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginAluno" element={<LoginAluno />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/loginNutri" element={<LoginNutri />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
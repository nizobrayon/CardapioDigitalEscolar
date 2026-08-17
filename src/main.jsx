import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginAluno from './pages/Login/LoginAluno';
import Cadastro from './pages/Cadastro';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" loginaluno={<LoginAluno />}/>
        <Route path="/" cadastro={<Cadastro />}/>
      </Routes>
    </BrowserRouter>
  );
}
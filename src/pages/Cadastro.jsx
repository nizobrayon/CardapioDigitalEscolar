import "../pages/Login/Login.css"

function Cadastro(){
    return(
        <div className="loginContainer">
            <div className="login-box">

               <h1>Cardápio Digital Escolar</h1>

               <p className="login-subtitle">
                Cadastre-se
                </p>

                <div className="input-group">
                    <label> Nome de Usuário</label>
                    <input type="name"
                    placeholder="Digite seu nome de Usuário"/>
                </div>

            <div className="input-group">
               <label>E-mail</label>
                <input type="email" 
                placeholder="Digite seu E-mail"/>
            </div>

                <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
            />
            </div>

            <div className="input-group">
            <label>Confirme sua senha</label>

              <input type="password"
              placeholder="Confirme a Senha"
            />
            </div>
            <button type="submit">Cadastrar</button>
           
           <p className="cadastro-text">
          Ainda não possui uma conta?
          <a href="/loginaluno">Login</a>
        </p>
            </div>
        </div>
    );
}

export default Cadastro;
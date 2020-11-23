import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../pages/inicio";
import IniciarSesion from "../pages/iniciarSesion";
import Categoria from "../components/Categoria";
import Categorias from "../pages/categorias";
import Lobby from "../pages/lobby";
import Registrarse from "../pages/registrarse";
import Perfil from "../pages/perfil";
import Establecimientos from "../pages/establecimientos";


/*import lobby from "../pages/lobby";*/

/*import Lobby from "../pages/lobby";*/
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/iniciarSesion" component={IniciarSesion} />
        <Route exact path="/registrarse" component={Registrarse} />
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/lobby" component={Lobby} />
        <Route exact path="/establecimientos" component={Establecimientos} />
        <Route exact path="/categorias" component={Categorias} />
        <Route exact path="/categorias/:categoria" component={Categoria} />
        <Route exact path="/perfil" component={Perfil} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;

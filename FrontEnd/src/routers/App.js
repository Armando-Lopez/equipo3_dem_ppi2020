import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../pages/inicio";
import IniciarSesion from "../pages/iniciarSesion";
import Establecimientos from "../pages/establecimientos";
import Establecimientos1 from "../pages/establecimientos1";
import Belleza from "../pages/belleza";
import Belleza1 from "../pages/belleza1";
import Tecnologia from "../pages/tecnologia";
import Tecnologia1 from "../pages/tecnologia1";
import Restaurante from "../pages/restaurante";
import Restaurante1 from "../pages/restaurante1";
import Drogueria from "../pages/drogueria";
import Drogueria1 from "../pages/drogueria1";
import Lobby from "../pages/lobby";
import Categorias from "../pages/categorias";
import Perfil from "../pages/perfil";


import Registrarse from "../pages/registrarse";
/*import lobby from "../pages/lobby";*/
import RegistrarTienda from "../pages/registrarTienda";
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
        <Route exact path="/registrarTienda" component={RegistrarTienda} />
        <Route exact path="/establecimientos" component={Establecimientos} />
        <Route exact path="/establecimientos1" component={Establecimientos1} />
        <Route exact path="/belleza" component={Belleza} />
        <Route exact path="/belleza1" component={Belleza1} />
        <Route exact path="/tecnologia" component={Tecnologia} />
        <Route exact path="/tecnologia1" component={Tecnologia1} />
        <Route exact path="/restaurante" component={Restaurante} />
        <Route exact path="/restaurante1" component={Restaurante1} />
        <Route exact path="/drogueria" component={Drogueria} />
        <Route exact path="/drogueria1" component={Drogueria1} />
        <Route exact path="/categorias" component={Categorias} />
        <Route exact path="/perfil" component={Perfil} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;

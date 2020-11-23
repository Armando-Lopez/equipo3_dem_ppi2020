import React from "react";
import "../style/style.css";

class IniciarSesion extends React.Component {
  render() {
    return (
      <div className="container-fluid containerDos fondoInicio4">
        <div className="row">
          <div className="col-sm">
            <h1 className="openshop"> OpenShop</h1>

            <br />

            <form>
              <label>
                <strong className="text2"> Usuario </strong>
                <br />
                <input className="text" type="text" name="name" />
              </label>
            </form>

            <form>
              <label className="text2">
                <strong> Contraseña </strong>
                <br />
                <input className="text" type="text" name="name" />
              </label>
            </form>

            <button className="button" type="button">
              <a href="inicio">Atrás</a>
            </button>

            <button className="button" type="button">
              <a href="lobby">Entrar</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default IniciarSesion;

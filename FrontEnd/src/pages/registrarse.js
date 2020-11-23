import React from "react";
class Registrarse extends React.Component {
  render() {
    return (
      <div className="container-fluid containerDos fondoInicio2">
        <div className="row">
          <div className="col-sm">
            <h1> OpenShop</h1>

            <br />

            <h2 className="register"> Registro </h2>
            <form>
              <label>
                <strong> Usuario : </strong>
                <br />
                <input className="text" type="text" name="name" />
              </label>
            </form>
            <form>
              <label>
                <strong> E-mail : </strong>
                <br />
                <input className="text" type="text" name="name" />
              </label>
            </form>
            <form>
              <label>
                <strong> Contraseña : </strong>
                <br />
                <input className="text" type1="text" name="name" />
              </label>
            </form>
            <form>
              <label>
                <strong> Confirmar contraseña : </strong>
                <br />
                <input className="text" type="text" name="name" />
              </label>
            </form>
            
            <div className="comuna">
              <select id="inputState" class="form-control">
                <option selected>Comuna</option>
                <option>5</option>
              </select>
            </div>
            <div className="comuna">
              <select id="inputState" class="form-control">
                <option selected>Comuna</option>
                <option>5</option>
              </select>
            </div>

            <button className="button" type="button">
              <a href="inicio">Atrás</a>
            </button>

            <button className="button" type="button">
              <a href="inicio">Entrar</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Registrarse;

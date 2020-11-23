import React from "react";
import "../style/style.css";
class registrarTienda extends React.Component {
  render() {
    return (
      <div className="container-fluid containerTres fondoInicio3">
        <div className="row">
          <div className="col-sm">
            <h1>OpenShop</h1>

            <br />

            <h2 className="register container-fluid"> Registrar Tienda </h2>
            <br />

            <form>
              <label>
                <strong> Nombre establecimiento: </strong>
                <input className="text" type="text" name="name" />
              </label>
            </form>

            <div class="form-group col-md-4 ">
              <select id="inputState" class="form-control">
                <option selected>Tipo de categoría</option>
                <option>Droguería</option>
                <option>Tecnología</option>
                <option>Restaurante</option>
                <option>Belleza</option>
              </select>
            </div>

            <form>
              <label>
                <strong> Dirección: </strong>
                <input className="text" type="text" name="name" />
              </label>
            </form>
            <br />
            <button className="button" type="button">
              <a href="inicia">Atrás</a>
            </button>

            <button className="button" type="button">
              <a href="inicia">Entrar</a>
            </button>
          </div>
        </div>
      </div>
     
    );
  }
}

export default registrarTienda;

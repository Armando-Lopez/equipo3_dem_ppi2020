import React from "react";
import "../style/style.css";

class Lobby extends React.Component {
  render() {
    return (
      <div className=" container-fluid fondoInicio5">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <br />
              <br />
              <h1 className="openshop1">Open Shop</h1>
              <br />
              <h4> Establecimientos creados</h4>

              <div className="divperfil">
                <button type="button" className="button">
                <a href="registrarTienda">+</a>
           
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Lobby;

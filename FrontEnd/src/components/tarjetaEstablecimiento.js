import React from "react";
import BarberiaEsparta from "../images/barberiaEsparta.jpg";
import Celulares from "../images/celulares.jpg";
import Carniceria from "../images/carniceria.jpg";
import "../style/style.css";

class TarjetaEstablecimiento extends React.Component {
  render() {
    return (
      <div class="card mb-3, tarjetaEstablecimiento, container-fluid">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              className="imagenEstablecimiento"
              src={BarberiaEsparta}
              alt=""
            ></img>
            ·{" "}
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">Belleza</h2>
              <p class="card-text">
                <h4>
                  Barberia Esparta <br />
                </h4>
                <p>Carrera 74#11030 </p>
              </p>
              <p class="card-text"></p>
              <img
                className="imagenEstablecimiento"
                src={Celulares}
                alt=""
              ></img>
              ·{" "}
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h2 class="card-title">Tecnologia</h2>
                <p class="card-text">
                  <h4>
                    Celulares J&D <br />
                  </h4>
                  <p>Carrera 74#10915 </p>
                </p>
                <br />
                <p class="card-text"></p>
                <img
                  className="imagenEstablecimiento"
                  src={Carniceria}
                  alt=""
                ></img>
                ·{" "}
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h2 class="card-title">Carniceria</h2>
                  <p class="card-text">
                    <h4>
                      Distri Cerdos Y Carnes La Marsella <br />
                    </h4>
                    <p>Carrera 67b </p>
                  </p>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TarjetaEstablecimiento;

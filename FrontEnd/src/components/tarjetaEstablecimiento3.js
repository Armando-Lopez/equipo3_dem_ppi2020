import React from "react";
import BarberiaEsparta from "../images/barberiaEsparta.jpg";
import ThimsColor from "../images/thimsColor.jpg";
import "../style/style.css";

class TarjetaEstablecimiento3 extends React.Component {
  render() {
    return (
      <div class="card mb-3, tarjetaEstablecimiento, container-fluid">
        <div class="row no-gutters">
          <div class="col-md-4">
          <img className="imagenEstablecimiento" src= {BarberiaEsparta} alt=""></img>·{" "}

          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
              <h4>Barberia Esparta<br/></h4>
               <p>Carrera 70#11130 </p>
               </p>
              <p class="card-text">
              </p>
              <img className="imagenEstablecimiento" src= {ThimsColor} alt=""></img>·{" "}
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
              <h4>Thim´s Color<br/></h4>
               <p>Calle 112#67-12 </p>
              </p>
              <p class="card-text">
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default TarjetaEstablecimiento3;

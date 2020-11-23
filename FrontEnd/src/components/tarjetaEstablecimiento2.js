import React from "react";
import DrogFarma from "../images/drogFarma.jpeg";
import Farmacenter from "../images/farmacenter.jpg";
import "../style/style.css";

class TarjetaEstablecimiento2 extends React.Component {
  render() {
    return (
      <div class="card mb-3, tarjetaEstablecimiento, container-fluid">
        <div class="row no-gutters">
          <div class="col-md-4">
          <img className="imagenEstablecimiento" src= {DrogFarma} alt=""></img>·{" "}
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
              <h4>Drog Farma<br/></h4>
               <p>Carrera 67B#116-5 </p>
               </p>
              <br/>
              <p class="card-text">
              </p>
              <img className="imagenEstablecimiento" src= {Farmacenter} alt=""></img>·{" "}
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
              <h4>Farmacenter Roos<br/></h4>
               <p>Carrera 70#110-28 </p>
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
export default TarjetaEstablecimiento2;

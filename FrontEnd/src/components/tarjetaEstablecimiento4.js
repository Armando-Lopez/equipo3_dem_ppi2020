import React from "react";
import BemaCell from "../images/bemaCell.jpeg";
import Celulares from "../images/celulares.jpg";
import "../style/style.css";

class TarjetaEstablecimiento4 extends React.Component {
  render() {
    return (
      <div class="card mb-3, tarjetaEstablecimiento, container-fluid">
        <div class="row no-gutters">
          <div class="col-md-4">
          <img className="imagenEstablecimiento" src= {BemaCell} alt=""></img>·{" "}
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
              <h4>Bema Cell<br/></h4>
               <p>Calle 98#69-06  </p>
               </p>
              <br/>
              <p class="card-text">
              </p>
              <img className="imagenEstablecimiento" src= {Celulares} alt=""></img>·{" "}
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
              <h4>Celulares J&D<br/></h4>
               <p>Carrera 74#10913 </p>
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
export default TarjetaEstablecimiento4;

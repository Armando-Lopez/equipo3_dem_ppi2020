import React from "react";
import MaoTse from "../images/maoTse.jpeg"; 
import Tolucho from "../images/tolucho.jpeg"
import "../style/style.css";

class TarjetaEstablecimiento5 extends React.Component {
  render() {
    return (
      <div class="card mb-3, tarjetaEstablecimiento, container-fluid">
        <div class="row no-gutters">
          <div class="col-md-4">
          <img className="imagenEstablecimiento" src= {MaoTse} alt=""></img>·{" "}
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
              <h4>Mao-Tsé<br/></h4>
               <p>Carrera 65#11425  </p>
               </p>
              <br/>
              <p class="card-text">
              </p>
              <img className="imagenEstablecimiento" src= {Tolucho} alt=""></img>·{" "}
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
              <h4>Tolucho<br/></h4>
               <p>Carrera 68#94-64 </p>
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
export default TarjetaEstablecimiento5;
import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import BarberiaEsparta from "../images/barberiaEsparta.jpg";
import Celulares from "../images/celulares.jpg";
import Carniceria from "../images/carniceria.jpg";

class Establecimientos1 extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid, fondo">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6"></div>
            <Header />
            <h1 className="container">OpenShop</h1>
            <Menu />
            <h3 className="tituloComunaCinco container">
              <br /> <br />
              Establecimientos comuna 5
            </h3>
          </div>
          <img
            className="imagenEstablecimiento"
            src={BarberiaEsparta}
            alt=""
          ></img>
          <h4 className="textopant">
            Barberia Esparta <br />
            </h4>
            <p className="textopant">
              Carrera 74#11030 </p>
          <br/>
          <img className="imagenEstablecimiento" 
          src={Celulares} 
          alt="">
          </img>
          <h4 className="textopant">
          Celulares J&D <br />
           </h4>
          <p className="textopant">
            Carrera 74#10915 </p>
                
          <br/>
          <img
            className="imagenEstablecimiento"
            src={Carniceria}
            alt="">
            </img>
            <h4 className="textopant">
            Distri Cerdos Y Carnes La Marsella <br />
          </h4>
          <p className="textopant">
            Carrera 67b </p>
        </div>
      </div>
    );
  }
}
export default Establecimientos1;

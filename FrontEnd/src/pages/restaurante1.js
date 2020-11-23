import React from "react";
import Header from "../components/header";
import MaoTse from "../images/maoTse.jpeg";
import Tolucho from "../images/tolucho.jpeg";
import Menu from "../components/menu";

class Restaurante1 extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid, fondo">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6"></div>
            <Header />
            <h1>
              <br />
              OpenShop
            </h1>
            <Menu />

            <h3 className="tituloComunaCinco">Establecimientos comuna 5</h3>
            <br />
            <br />
            <h3>Categoria > Restaurantes</h3>
          </div>
          <img className="imagenEstablecimiento" src={MaoTse} alt=""></img>·{" "}
          <h4>
            Mao-Tsé
            <br />
          </h4>
          <p>Carrera 65#11425 </p>
          <br />
          <img
            className="imagenEstablecimiento"
            src={Tolucho}
            alt=""
          ></img>·{" "}
          <h4>
            Tolucho
            <br />
          </h4>
          <p>Carrera 68#94-64 </p>
          <br />
        </div>
      </div>
    );
  }
}
export default Restaurante1;

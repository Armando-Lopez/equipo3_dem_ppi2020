import React from "react";
import Header from "../components/header";
import BemaCell from "../images/bemaCell.jpeg";
import Celulares from "../images/celulares.jpg";
import Menu from "../components/menu";

class Tecnologia1 extends React.Component {
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
            <h3>Categoria > Tecnologia</h3>
          </div>
          <img className="imagenEstablecimiento" src={BemaCell} alt=""></img>·{" "}
          <h4>
            Bema Cell
            <br />
          </h4>
          <p>Calle 98#69-06 </p>
          <br />
          <img
            className="imagenEstablecimiento"
            src={Celulares}
            alt=""
          ></img>·{" "}
          <h4>
            Celulares J&D
            <br />
          </h4>
          <p>Carrera 74#10913 </p>
          <br />
        </div>
      </div>
    );
  }
}
export default Tecnologia1;

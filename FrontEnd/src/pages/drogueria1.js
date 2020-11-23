import React from "react";
import Header from "../components/header";
import DrogFarma from "../images/drogFarma.jpeg";
import Farmacenter from "../images/farmacenter.jpg";
import Menu from "../components/menu";

class Drogueria1 extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid, fondo">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6"></div>
            <Header />
            <h1><br/>OpenShop</h1>
            <Menu />
            <h3 className="tituloComunaCinco"> 
            Establecimientos comuna 5</h3>
            <br/>
            <h3>Categoria > Drogueria</h3>
            <br/> <br/>

        </div>
        <img className="imagenEstablecimiento" src= {DrogFarma} alt=""></img>·{" "}
        <h4 className="textopant">
          Drog Farma</h4>
               <p className="textopant">
                 Carrera 67B#116-5 </p>
        <br/>
        <img className="imagenEstablecimiento" src= {Farmacenter} alt=""></img>·{" "}
        <h4 className="textopant">
          Farmacenter Roos<br/></h4>
               <p className="textopant">
                 Carrera 70#110-28 </p>
        <br/>
        </div>
      </div>
    );
  }
}
export default Drogueria1;


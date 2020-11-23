import React from "react";
import Header from "../components/header";
import BarberiaEsparta from "../images/barberiaEsparta.jpg";
import ThimsColor from "../images/thimsColor.jpg";
import Menu from "../components/menu";

class Belleza extends React.Component {
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
            <br/><h3>Categoria > Belleza</h3>
            
  
        </div>
        <img className="imagenEstablecimiento" src= {BarberiaEsparta} alt=""></img>·{" "}
        <h4 className="textopant">
          Barberia Esparta<br/></h4>
          <p className="textopant">
            Carrera 70#11130 </p>
               

        <br/>
        <img className="imagenEstablecimiento" src= {ThimsColor} alt=""></img>·{" "}
        <h4 className="textopant">
        Thim´s Color<br/></h4>
               <p className="textopant">
                 Calle 112#67-12 </p>
        <br/>
        </div>
      </div>
    );
  }
}
export default Belleza;
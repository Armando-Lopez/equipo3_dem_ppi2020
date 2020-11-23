import React from "react";
import "../style/style.css";
import BarberiaEsparta from "../images/barberiaEsparta.jpg";
import Farmacia from "../images/farmacenter.jpg";
import Carniceria from "../images/carniceria.jpg";
import Celulares from "../images/celulares.jpg";

class categorias extends React.Component {
  render() {
    return (
      <div className="divnav ">
        <h1 className="openshop3">Open Shop</h1>

        <nav className="navbar bg-light ">
          <button
            className=" my-2 my-sm-4 navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <form className=" form-inline my-6 my-lg-6">
            <input
              className="barra"
              type="Search"
              placeholder="Buscar establecimiento"
              aria-label="Search"
            />
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
              Buscar
            </button>
          </form>
        </nav>
        <div className="catego">
          <h2 className="categoria">Categorias de nuestros establecimentos</h2>
          <h3 className="need">Consigue lo que necesitas</h3>
          <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
              <div class="card">
                <img src={BarberiaEsparta} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img src={Celulares} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img src={Farmacia} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img src={Carniceria} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default categorias;

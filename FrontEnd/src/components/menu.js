import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div className="container-fluid menuBuscador ">
        
           <nav className="navbar  navbar-light bg-light">
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

          <form className=" form-inline my-6 my-lg-6 barraEstablecimiento">
            <input
              className=" form-control mr-sm-3, barraEstablecimiento "
              type="Search"
              placeholder=""
              aria-label="Search"
            />
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
              Buscar
            </button>
          </form>
        </nav>
      </div>
    );
  }
}
export default Menu;

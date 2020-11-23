import React from "react";
import "../style/style.css";

class perfil extends React.Component {
  render() {
    return (
      <div className=" container-fluid  container5 fondoInicio7">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <br />
              <br />
              <h1 className="openshop2">Open Shop</h1>
              <br />

              <form>
                <label>
                  <strong> Nombre: </strong>
                  <input className="text" type="text" name="name" />
                </label>
              </form>

              <form>
                <label>
                  <strong> Dirección: </strong>
                  <input className="text" type="text" name="name" /> 
                  </label>
              </form>
            

                  
                  <br/>

                  <div class="personas ">
                    <select id="inputState" class="form-control">
                      <option selected>Tipo de categoría</option>
                      <option>Droguería</option>
                      <option>Tecnología</option>
                      <option>Restaurante</option>
                      <option>Belleza</option>
                    </select>
                  </div>
                  <br/>
                  <div className="personas">
                    <select id="inputState" class="form-control">
                      <option selected>
                        Nº de personas en el establecimiento:
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>Más de 10</option>
                    </select>
                  </div>
               <br/>
                  <form>
                <label>
                  <strong> Horario: </strong>
                  <input className="text" type="text" name="name" />
                </label>
              </form>
              <br/>
                <label>
                  <strong> Domicilios </strong>
                  </label>
             

      <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label" for="exampleRadios1">Si</label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">No</label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">Fuera de servicio</label>
</div>

<br/>
<button className="button" type="button">
                <a href="establecimientos1">Atrás</a>
              </button>

              <button className="button" type="button">
                <a href="establecimientos1">Actualizar</a>
              </button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default perfil;

import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "../style/style.css";
import tiposCategorias from "../db/categorias.json";
import Menu from "../components/menu";
import Logo from "../components/Logo";

const Categorias = () => {
	const { url } = useRouteMatch();

	return (
		<div className="container-fluid">
			<div className="container bg-cian">
				{/* <Header /> */}
				<Logo />
				<Menu tipoBusqueda="categorias" />

				<div className="row mt-3">
					{tiposCategorias.map((categoria, i) => {
						return (
							<div className="col-12 col-md-6">
								<div className="card mx-auto mb-4" style={{width: '18rem'}} >
									<img src={categoria.imagen} className="card-img-top image-responsive" alt="..." width="150" height="200" />
									<div className="card-body">
									

										<Link to={`${url}/${categoria.nombre}`} className="btn btn-primary">
											{categoria.nombre}
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Categorias;

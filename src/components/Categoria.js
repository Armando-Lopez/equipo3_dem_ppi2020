import React, { useState, useEffect } from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import Menu from "./menu";
import Axios from "axios";
import TarjetaEstablecimiento from "./tarjetaEstablecimiento";
import Logo from "./Logo";

const Categoria = () => {
	const { categoria } = useParams();
	const [establecimiento, setEstablecimiento] = useState([]);

	useEffect(() => {
		Axios.get("https://prlik.sse.codesandbox.io/" + categoria)
			.then((response) => {
				console.log(response);
				const data = response.data.rows;
				// console.log(data);
				setEstablecimiento(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		// d-flex justify-content-center flex-column mt-3 rounded
		<div className="container bg-cian">
			<div className="row">
				<div className="col-12">
					<Logo />
				</div>
				<div className="col-12">
					<Menu />
				</div>
				<div className="col-12">
					<h4 className="text-center">
						Establecimientos comuna 5: <br /> Categoria {categoria}
					</h4>
					<div className="row">
						{establecimiento.map((establecimiento, i) => {
							return (
								<div className="col-12 col-md-6 mb-3" key={i}>
									<TarjetaEstablecimiento
										id={establecimiento.ID_Establecimiento}
										nombre={establecimiento.Nomnbreestablecimiento}
										direccion={establecimiento.Dirrecion}
										imagen={establecimiento.imagenes}
										personas={establecimiento.Ndepersonas}
										horario={establecimiento.Horario}
										domicilios={establecimiento.Domicilios}
									></TarjetaEstablecimiento>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Categoria;

import React from "react";
import "../style/style.css";

const TarjetaEstablecimiento = ({
	nombre,
	direccion,
	imagen,
	personas,
	horario,
	domicilios,
}) => {
	return (
		<div className="card shadow-lg">
			<img className="card-img-top" src={imagen} alt={nombre} />
			<div className="card-body">
				<h5 className="card-title text-center">{nombre}</h5>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Dirrecion: </b>
						{direccion}
					</li>
					<li className="list-group-item">
						<b>Nº de personas en el establecimiento: </b>
						{personas}
					</li>
					<li className="list-group-item">
						<b>Horario: </b>
						{horario}
					</li>
					<li className="list-group-item">
						<b>Domicilio: </b>
						{domicilios}
					</li>
				</ul>
			</div>
		</div>
	);
};
export default TarjetaEstablecimiento;

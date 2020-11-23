import Axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Logo from "../components/Logo";
import "../style/style.css";

const Lobby = () => {
	const [misEstablecimientos, setMisEstablecimientos] = useState([]);

	useEffect(() => {
		const userid = localStorage.getItem("usuario");
		if (userid) {
			Axios.get(
				"https://prlik.sse.codesandbox.io/mis-establecimientos/" + userid
			)
				.then((response) => {
					const data = response.data.rows;
					if (data && data.length) {
						setMisEstablecimientos(data);
					}
					// console.log(response);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);

	function borrarEstablecimiento(id) {
		Axios.delete(
			"https://prlik.sse.codesandbox.io/borrar-establecimiento/" + id
		)
			.then(() => {
				Swal.fire(
					"Éxito",
					"El establecimiento ha sido borrado",
					"Haz click en el botón"
				);
				const eliminado = misEstablecimientos.find((item) => item.ID_Establecimiento === id);
				let indexDeEliminado = misEstablecimientos.indexOf(eliminado);
				const copy = [...misEstablecimientos];
				copy.splice(indexDeEliminado, 1);
				setMisEstablecimientos(copy);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div className="container-fluid fondoInicio  "style={{width:'30rem'}}>
			<div className="container  bg-cian ">
				<div className="row">
					<div className="col-sm-12">
						<Logo />
						<h4 className="text-center">Establecimientos creados</h4>

						<div className="bg-whites container mx-auto ">
							<a className="btn btn-primary mb-2" href="/perfil">
								Nuevo +
							</a>

							<div className="row">
								{misEstablecimientos.map((establecimiento) => {
									return (
										<div
											className="card col-11 col-md-5 mb-3 text-center  "
											key={establecimiento.Nomnbreestablecimiento}
										>
											<img
												className="card-img-top"
												src={establecimiento.imagenes}
												alt="Card image cap"
											/>
											<div className="card-body">
												<h5 className="card-text">
													{establecimiento.Nomnbreestablecimiento}
												</h5>
											</div>
											<div className="card-footer">
												<i
													className="fas fa-trash-alt btn right"
													onClick={() =>
														borrarEstablecimiento(
															establecimiento.ID_Establecimiento
														)
													}
												></i>
											</div>
										</div>
									);
								})}
							</div>
						</div>

						<a className="btn btn-primary mb-3 mr-5" href="/iniciarSesion">
							Atras
						</a>

						<a className="btn btn-primary mb-3" href="/establecimientos">
							Siguiente
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Lobby;

import React, { useState } from "react";
import Axios from "axios";
import "../style/style.css";
import Logo from "../components/Logo";
import { Redirect } from "react-router-dom";

const imageToBase64 = (file) => {
	return new Promise((resolve, reject) => {
		if (!file.type.includes("image")) {
			reject(new Error("File must be type image"));
		}
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
};

const Perfil = () => {
	const [establecimiento, setEstablecimiento] = useState({});
	const [nextPage, setNextPage] = useState("");

	function updateEstablecimiento(ev) {
		ev.persist();
		const name = ev.target.name;
		let value = ev.target.value;

		if (name === "categoria") {
			value = Number(value);
		}

		setEstablecimiento({
			...establecimiento,
			[name]: value,
		});
	}

	function subirFoto(ev) {
		const image = ev.target.files[0];
		imageToBase64(image).then((result) => {
			setEstablecimiento({
				...establecimiento,
				imagenes: result,
			});
		});
	}

	function guardarEstablecimiento() {
		const idAdministrador = localStorage.getItem("usuario");
		if (idAdministrador) {
			Axios.post("https://prlik.sse.codesandbox.io/crear-establecimiento", {
				...establecimiento,
				idAdministrador,
			})
				.then((response) => {
					console.log(response);
					const type = establecimiento.categoria;
					if (type === 1) {
						setNextPage("categorias/belleza");
					} else if (type === 2) {
						setNextPage("categorias/drogueria");
					} else if (type === 3) {
						setNextPage("categorias/restaurantes");
					} else if (type === 4) {
						setNextPage("categorias/tecnologia");
					}
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			alert("No admin en sesión");
		}
	}

	if (nextPage) {
		return <Redirect to={nextPage} />;
	}
	return (
		<div className="container bg-cian">
			<Logo />
			<form className="row d-flex justify-content-center flex-column align-content-center">
				<div className="form-group">
					<label>
						<strong> Nombre: </strong>
						<input
							className="form-control"
							type="text"
							name="nombre"
							onChange={updateEstablecimiento}
						/>
					</label>
					<div className="form-group">
						<label>
							<strong> Dirección: </strong>
							<input
								className="form-control"
								type="text"
								name="direccion"
								onChange={updateEstablecimiento}
							/>
						</label>
					</div>

					<div className="form-group">
						<button className="btn btn-primary" type="button">
							<label htmlFor="foto">
								Subir foto
								<input
									type="file"
									id="foto"
									name="foto"
									className="d-none"
									onChange={subirFoto}
								/>
							</label>
						</button>
					</div>
					<img
						src={establecimiento.imagenes}
						className="img-responsive mb-5"
						with="200"
					/>

					<div className="form-group">
						<div className="personas ">
							<select
								className="form-control"
								name="categoria"
								onChange={updateEstablecimiento}
								defaultValue="Tipo de categoría"
							>
								<option disabled>Tipo de categoría</option>
								<option value="1">Belleza</option>
								<option value="2">Droguería</option>
								<option value="3">Restaurante</option>
								<option value="4">Tecnología</option>
							</select>
						</div>
					</div>
					<div className="form-group">
						<div className="personas">
							<select
								className="form-control"
								name="cantidadPersonas"
								onChange={updateEstablecimiento}
								defaultValue="Nº de personas en el establecimiento:"
							>
								<option disabled>Nº de personas en el establecimiento:</option>
								{[...Array(10)].map((num, i) => (
									<option value={i + 1} key={i}>
										{i + 1}
									</option>
								))}
								<option>Más de 10</option>
							</select>
						</div>
					</div>
					<div className="form-group">
						<label>
							<strong> Horario: </strong>
							<input
								className="form-control"
								type="text"
								name="horario"
								placeholder="10:00 - 09:00"
								onChange={updateEstablecimiento}
							/>
						</label>
					</div>
					<div className="form-group">
						<label>
							<strong> Domicilios </strong>
						</label>

						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="domicilios"
								id="exampleRadios1"
								value="Sí"
								defaultChecked
								onChange={updateEstablecimiento}
							/>
							<label className="form-check-label" htmlFor="exampleRadios1">
								Si
							</label>
						</div>

						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="domicilios"
								id="exampleRadios2"
								value="No"
								onChange={updateEstablecimiento}
							/>
							<label className="form-check-label" htmlFor="exampleRadios2">
								No
							</label>
						</div>

						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="domicilios"
								id="exampleRadios2"
								value="Fuera de servicio"
								onChange={updateEstablecimiento}
							/>
							<label className="form-check-label" htmlFor="exampleRadios2">
								Fuera de servicio
							</label>
						</div>
					</div>
					<div className="form-group text-dark">
						<a className="btn btn-primary mr-5" href="establecimientos">
							Atrás
						</a>

						<button
							className="btn badge-success"
							type="button"
							onClick={guardarEstablecimiento}
						>
							Actualizar
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
export default Perfil;

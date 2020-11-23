import Axios from "axios";
import React, { useState } from "react";
import "../style/style.css";
import Swal from "sweetalert2";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const IniciarSesion = () => {
	const [userData, setUserData] = useState({});

	function updateUser(ev) {
		ev.persist();

		const name = ev.target.name;
		const value = ev.target.value;

		setUserData({
			...userData,
			[name]: value,
		});
	}

	function singIn() {
		Axios.put("https://prlik.sse.codesandbox.io/inicioSesion", userData)
			.then((respose) => {
				const data = respose.data.row;
				if (data.length) {
					localStorage.setItem("usuario", data[0].ID_Administrador);
					window.location.href = "/lobby";
				} else {
					Swal.fire("Oops", "Usuario o contraseña incorrecta");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div className="fondoblanco p-4">
			<div className="  border container-fluid containerDos fondoInicio">
				<div className="row">
					<div className="col-sm">
						<form>
							<Logo />

							<br />

							<label>
								<strong className="text2"> Usuario </strong>
								<br />
								<input
									className="boton"
									type="text"
									name="usuario"
									onChange={updateUser}
								/>
							</label>

							<label className="text2">
								<strong> Contraseña </strong>
								<br />
								<input
									className="boton"
									name="password"
									onChange={updateUser}
									type="password"
								/>
							</label>
							<br />

							<button className="boton" type="button">
								<Link className="text-dark" to="inicio">
									Atrás
								</Link>
							</button>

							<button className="boton" type="button" onClick={singIn}>
								Entrar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IniciarSesion;

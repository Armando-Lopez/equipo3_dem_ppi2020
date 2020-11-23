import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Menu = ({ tipoBusqueda }) => {
	const [admin, setAdmin] = useState(null);

	const [busqueda, setBusqueda] = useState("");

	useEffect(() => {
		const admin = localStorage.getItem("usuario");
		if (admin) {
			setAdmin(admin);
		}
	}, []);

	function buscar() {
		if (busqueda.trim()) {
			Axios.get("https://prlik.sse.codesandbox.io/buscar-establecimientos/" + busqueda)
				.then((response) => {
					console.log(response);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}

	return (
		<Navbar className="container-fluid" bg="light" expand="lg">
			<Navbar.Brand href="#home"></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto ">
					<Nav.Link href="/categorias">Categorías</Nav.Link>
					{admin && (
						<>
							<Nav.Link href="/lobby">Perfil</Nav.Link>
							<Nav.Link href="IniciarSesion">Cerrar sesión</Nav.Link>
						</>
					)}
				</Nav>
				<Form inline>
					<FormControl
						type="text"
						placeholder="Nombre"
						className="mr-sm-2"
						onChange={(e) => setBusqueda(e.target.value)}
					/>
					<Button variant="outline-info" onClick={buscar}>
						Buscar
					</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};
export default Menu;

import React,{useState,useEffect} from "react";
import Axios from "axios";
import Logo from "../components/Logo";
import Menu from "../components/menu";
import TarjetaEstablecimiento from "../components/tarjetaEstablecimiento";

const Establecimientos = () => {

  const [establecimientos, setEstablecimientos] = useState([])

	useEffect(() => {
		Axios.get("https://prlik.sse.codesandbox.io/establecimientos")
			.then((response) => {
        console.log(response);
				const data = response.data.rows;
				// console.log(data);
				setEstablecimientos(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="container bg-cian mt-2">
			<div className="row">
				<div className="col-12">
					<Logo />
				</div>
				<div className="col-12">
					<Menu />
				</div>
				<div className="col-12">
					<h3 className="text-center">Establecimientos comuna 5</h3>
					<div className="row">
						{establecimientos.map((establecimiento, i) => {
							return (
								<div className="col-12 col-md-6 mb-3" key={i}>
									<TarjetaEstablecimiento
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
export default Establecimientos;

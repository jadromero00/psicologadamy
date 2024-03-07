document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "5521412707";

  let cliente = document.querySelector("#cliente").value;
  let sintomas = document.querySelector("#sintomas").value;
  let cita = document.querySelector("#cita").value;
  let colonia = document.querySelector("#colonia").value;
  let costo = document.querySelector("#costo").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_Cirujano General Gastrointestinal en Cuauhtémoc CDMX_*%0A
		*Informe de cita*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A
		*¿Qué síntomas tiene?*%0A
		${sintomas}%0A
		*¿La cita la buscas para las próximas 24 hrs?*%0A
		${cita}%0A
		*Estamos en la Alc. Cuauhtémoc, CDMX. ¿te queda bien?*%0A
		${colonia}%0A
		*¿Los costos de la consulta son de 700 hasta 1000, ¿está bien?*%0A
		${costo}`;
	

  if (cliente === "" || cita === "" || ubicacion === "" || costo === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});

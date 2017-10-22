var btIniciar = document.getElementById("iniciar");
var btRegistrarme = document.getElementById("registrarme");
var capaInvisible = document.getElementById("invisible");
var btRegistrarmeinfohome = document.getElementById("registrarmeinfohome");

function ocultarLogin(event){
	event.preventDefault();
	
	$("#logearse").animate({
		marginTop: "-110px"
	}, 600);
}

function mostrarLogin(event){
	event.preventDefault();
	
	$("#logearse").animate({
		marginTop: 0
	}, 600);
	
	$("#cerrarLogin").click(ocultarLogin);
}

function cerrarRegistrarme(event){
	event.preventDefault();
	
	$("#registrar").animate({
		left: "-350px"
	}, 400);
	
	capaInvisible.style.display = "none";
}

function capaInvisibleAparece(){
	capaInvisible.style.display = "block";
	capaInvisible.addEventListener("click", cerrarRegistrarme);
}

function ocultarRegistrarme(event){
	event.preventDefault();
	
	$("#registrar").animate({
		left: "-350px"
	}, 400);
	
	capaInvisible.style.display = "none";
}

function mostrarRegistrar(event){
	event.preventDefault();
	
	$("#registrar").animate({
		left: 0
	}, 400, capaInvisibleAparece);
	
	$("#cerrarRegistrar").click(ocultarRegistrarme);
}

function cargarDocumento(){
	//$("#iniciar").click(mostrarLogin);
	btIniciar.addEventListener("click", mostrarLogin);
	btRegistrarme.addEventListener("click", mostrarRegistrar);
	btRegistrarmeinfohome.addEventListener("click", mostrarRegistrar);
}

$(document).ready(cargarDocumento)
function ValidaNombre(){
	
	var guardanombre = document.getElementById("nom").value;
	
	if (guardanombre.length < 4){
		alert  ("Tienes que ponerle más letritas,nene");
	}
	
}

function ValidaEmail(){
	
	let correo = document.getElementById("email").value;

    if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(correo))
    {
      return (true)
    }
      alert("Este emilio esta mal puesto!")
      return (false)
}

function Confimacion(){
	
	if (document.getElementById("km")!=null){

}
else{
    var input = document.createElement("input");
    var corredores = document.getElementById("corredor");
    input.type = "number";
    input.id = "km";
    input.placeholder = " Kilometros corridos"

    corredores.appendChild(input);
}
}
function borrado(){

	if (document.getElementById("km")!=null){
	document.getElementById("corredor").removeChild(document.getElementById("km")); 
	}
}

function Final(){
	
	var nombre2 = document.getElementById("nom").value;
	var email2 = document.getElementById("email").value;
	var saludo = "Tu nombre es " + nombre2 + " y tu email es " + email2 ;
	var ha_corrido = document.getElementById("rad-si").checked;
	if (ha_corrido==true){

	var kms = document.getElementById("km").value;

	saludo = saludo + " y has corrido " + kms;
}alert(saludo);

	
}

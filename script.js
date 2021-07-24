function salvarformproduto(){

  if (localStorage.cont) {
  
    localStorage.cont = Number(localStorage.cont)+1;
  
    } else {
  
      localStorage.cont = 1;
            
    }
var nomeprod = document.getElementById("nome").value;
var emailprod = document.getElementById("emailform").value;
var telefoneprod = document.getElementById("telefoneform").value;
var generoprod = document.getElementById("generoproduto").value;
var tamanhoprod = document.getElementById("tamanhoproduto").value;
var modeloprod = document.getElementById("modeloproduto").value;

var cadastroproduto = {

  nomeprod,
  emailprod,
  telefoneprod,
  generoprod,
  tamanhoprod,
  modeloprod

};

localStorage.setItem(
  "cadastroproduto_", 
  JSON.stringify (cadastroproduto), 
  localStorage.cont, cadastroproduto
);

}

function salvarformcliente(){

  if (localStorage.cont) {
  
    localStorage.cont = Number(localStorage.cont)+1;
  
    } else {
  
      localStorage.cont = 1;
            
    }

var nomecliente = document.getElementById("nomecliente").value;
var emailcliente = document.getElementById("emailcliente").value;
var telefonecliente = document.getElementById("telefonecliente").value;

var cadastrocliente = {

  nomecliente,
  emailcliente,
  telefonecliente

};

localStorage.setItem(
  "cadastrocliente_", 
  JSON.stringify (cadastrocliente), 
  localStorage.cont, cadastrocliente
);

}

//popo-up
$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }




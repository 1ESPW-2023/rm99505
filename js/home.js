
//Recepcionando o objeto que logou no localStorage e imprimindo uma de suas propriedades.
const spanUser = document.querySelector("#user");
let usuario = JSON.parse(localStorage.getItem("usuario-validado"))
spanUser.innerHTML = usuario.nomeCompleto;
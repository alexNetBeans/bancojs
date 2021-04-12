			    
function geraListaAmigos()

{
	let userId    =   sessionStorage.getItem('userId'); 	
	let lista     =   firebase.database().ref("bancojs/usuarios");
  let chat      =   "<img src='../images/chat-alt-outline.png' width='25' title='Enviar mensagem'>";
  let transf      =  "<img src='../images/exchange.png' width='30' title='Transferir'>";
	let content   =   "";

lista.orderByChild('usuarios').on('child_added', function (data)
{
  if (userId != data.key) 
  {
    content = content + "<tr>" + "<td><img src=" +  data.val().avatar + " width='25'><td>" + data.val().nome 
     + "<td>" + "<a href='#' id=" + data.key + " onClick='modalChat(this.id)'>" + chat  + "</a>" 
     + "<td>" + "<a href='#' id=" + data.key + " onClick='modalTransf(this.id)'>" + transf + "</a>";
    a.innerHTML = content;
  }  
});        
}

function enviaChat(id, chatMsg)
{
  
  let userId    =  sessionStorage.getItem('userId');
  let remetente =  sessionStorage.getItem('usuario');
  let avatar    =  sessionStorage.getItem('userAvatar');
	let msg       =  firebase.database().ref("bancojs/usuarios/" + id + "/chat");
  
  msg.push 
  ({
     remetente: remetente,
     avatar:    avatar,
     mensagem:  chatMsg,
     status:    0
  });
  
  
  
  

}  // Fecha Classe.
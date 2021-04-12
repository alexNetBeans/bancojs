// Muda o avatar do usuário

function mudaAvatar (avatar)
{

	sessionStorage.setItem('userAvatar', avatar);
	userAvatar.src  =  avatar;

	// Atualiza o avatar do usuário.

	let userId       =   sessionStorage.getItem('userId'); 	
	let alterar 	   =   firebase.database().ref("bancojs/usuarios/" + userId);
	     
	alterar.update 
	({
		  avatar: avatar

	});
}
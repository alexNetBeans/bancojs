			    
function adicionarAmigo(id)

{
	let userId        =   sessionStorage.getItem('userId'); 	
	let adicionar     =   firebase.database().ref("bancojs/usuarios/" + userId + "/amigos");
	let content       =   "";

adicionar.push 
  ({
        id: id
  });
}
  
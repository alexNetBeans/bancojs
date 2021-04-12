
function cadastrar ()

{
        

  			let nome 	    =   sessionStorage.getItem('nome');
  			let usuario   =   sessionStorage.getItem('usuario');
  			let senha 	  =   sessionStorage.getItem('senha');
  			let dataCad   =   sessionStorage.getItem('dataCad');
  
      if (nome == '')
        {
            sessionStorage.setItem('loginErro', 1);
            location.href = '../views/cad.html';
        }


		  	let dados = firebase.database().ref("bancojs/usuarios");
		       dados.push(
		         {
		            nome:      	 nome,
		            usuario:     usuario,
		            senha:       senha,
		            cadastro:    dataCad,
		            avatar:      '../images/user.png',
		            saldo: 		   0

		          });          			       
}
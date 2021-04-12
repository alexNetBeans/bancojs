
function logar ()

{
  		let usuario   =   sessionStorage.getItem('usuario');
  		let senha 	  =   sessionStorage.getItem('senha');
		  let logar 		=   firebase.database().ref("bancojs/usuarios");
  
      sessionStorage.setItem('senha', 0);	  

  
    if (usuario == ''|| senha == '')
      {
        sessionStorage.setItem('loginErro', 1);
        location.href = "../views/login.html";
      }

		// Procura o usuario informado e confere a sua senha.	

		logar.orderByChild("usuario").equalTo(usuario).on('child_added', function (data)
		{       
	    	if (usuario == data.val().usuario && senha == data.val().senha)
	        	{
	   				sessionStorage.setItem('userId', data.key);
	   				sessionStorage.setItem('userAvatar', data.val().avatar);
	   				sessionStorage.setItem('usuario', data.val().nome);
	   				sessionStorage.setItem('userSaldo', data.val().saldo);
	   				sessionStorage.setItem('dataCad', data.val().cadastro);	
            
            buscaNotifica();  
	   				location.href = "../views/depositar.html";

	    		}
	    	else {
              
	    			location.href = "../views/login.html";
	    			
	    		 }
	    });		       
}

function amigos()

{
        let userId    =   sessionStorage.getItem('userId'); 	
        let lista     =   firebase.database().ref("bancojs/usuarios/" + userId + "/amigos");
        let content   =   "";
        let index     = 0;
        let idAmigos  = [];
        nomeAmigo     = [];

      lista.orderByChild('amigos').on('child_added', function (id)
        {
             idAmigos.push(id.val().id);                  
        });        

       let lista2 = firebase.database().ref("bancojs/usuarios/");
        lista2.orderByChild("nome").on('child_added', function (data)
        {
            console.log(data.val().nome)
        }); 
  

    
} // Fecha função.

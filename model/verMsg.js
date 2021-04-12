
//  Busca a mensagem do usuário selecionado.

function verMsg(id)

{
  let idUser    =  sessionStorage.getItem('userId');   
  let notifica  =  firebase.database().ref("bancojs/usuarios/" + idUser + "/chat/" + id);
  
  notifica.orderByChild("status").on('value', function (data)
  {
    $('#msgModal').modal('show');    
    let msg      =  document.querySelector('#msg');
    let rement   =  document.querySelector('#rement');
    let avatar   =  document.querySelector('#avatar');
    
    notifica.update
    ({
        status: 1    
    });
    
    msg.innerHTML    =  data.val().mensagem;
    rement.innerHTML =  data.val().remetente;
    avatar.src       =  data.val().avatar;
    
    buscaNotifica();
    
    
    //  console.log(data.val().mensagem)
      
  });
  
}  // 
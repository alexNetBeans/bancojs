// Busca e lista as notificações para o usuário.

let content  = '';


function buscaNotifica()
{
  let id           =  sessionStorage.getItem('userId');   
  let numNotifica  = 0; 
  let notifica     =  firebase.database().ref("bancojs/usuarios/" + id + "/chat");
  
  notifica.orderByChild("status").on('child_added', function (data)
  {
    if (data.val().status == 0)
      {
         numNotifica = numNotifica + 1; 
         console.log(numNotifica)
      }
         sessionStorage.setItem('n', numNotifica);
  });
       
} 

// Monta a lista de mensagens recebidas. 

function listaNotifi()
  {
    let id        =  sessionStorage.getItem('userId');
    let notifica  =  firebase.database().ref("bancojs/usuarios/" + id + "/chat");
    
    notifica.orderByChild("chat").on('child_added', function (data)
     {
      content = content + "<tr>" + "<td><img src=" +  data.val().avatar + " width='27'><td>" + data.val().remetente 
     + "<td>" + "<a href='#' id=" + data.key + " onClick='verMsg(this.id)'> ver </a>" 
     + "<td>" + "<a href='#' id=" + data.key + " onClick='modalTransf(this.id)'> Apagar </a>";
     a.innerHTML = content;
      
     });
  }
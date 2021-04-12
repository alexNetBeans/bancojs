
function modalChat (id)
{
   $('#chat').modal('show');  
  let chat = document.querySelector('#inputChat');
  chat.value = "";
  
  let btnChat = document.querySelector('#btnChat');
  btnChat.addEventListener('click', function ()
  {
       $('#chat').modal('hide'); 
       enviaChat(id, chat.value);
  });
}


function modalTransf (id)
{
    $('#modalTransf').modal('show');  
}


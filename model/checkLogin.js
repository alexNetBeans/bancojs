// Verifica se o usuário fez o login para poder ter acesso a página.

function checkLogin ()
{
  
  
  if ( sessionStorage.getItem('userId') )
    {
        
    //  location.href = "../index.html";
      
    }
    else{
          let userId =  sessionStorage.getItem('userId');
    }
}
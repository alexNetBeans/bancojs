function mensagem (texto)
{
  
  let msg = "<div class='alert alert-danger text-center'>"  +  texto +  "</div>";
  sessionStorage.setItem('loginErro', 0);
  return msg;
 
  
}
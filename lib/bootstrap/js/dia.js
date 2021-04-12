
// Retorna a data atual no formato: 00/00/0000.

function dia()
{

  now = new Date();
  let fmtData  =  now.getDate() + '/' + now.getMonth() + '/' + now.getFullYear();
  return 	 fmtData;
  
}


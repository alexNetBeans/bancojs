
// Colocar valor em dinheiro no formato: R$ 1.000,00

function numeroReal(numero) 

{
	   var numero =  numero.toFixed(2).split('.');
	   numero[0]  =  "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
	   //numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
	   return numero.join(',');

}



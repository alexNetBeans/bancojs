// Verifica o saldo do usuário. Se = 0 desabilita a função 'saque'.

function verSaldo (saldoAtual)

{
	
   let btnSaque   =  document.querySelector('#saque');
   let vSaque 	  =  document.querySelector('#saqueValor');

	if (saldoAtual == 0)
	{
	   
	  vSaque.disabled 	 =  true;
	  btnSaque.disabled  =  true;	
	}
	else{

	  vSaque.disabled 	 =  false;
	  btnSaque.disabled  =  false;	
    
	}

}

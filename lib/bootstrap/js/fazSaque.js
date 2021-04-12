
// Faz o saque do valor informando pelo usuário do seu saldo atual.
					
			let btnSaque  =  document.querySelector('#saque');
			let vSaque 	  =  document.querySelector('#saqueValor');
			let vSaldo 	  =  document.querySelector('#saldoAtual');

			btnSaque.addEventListener('click', function ()
			{
			     
			     let result 	     =  saldo - vSaque.value;
			     vSaldo.innerHTML  =  numeroReal(result); 
			     vSaque.focus();
			     sessionStorage.setItem('userSaldo', result);

// Verifica a valor saldo. Se = 0 disabilita a função 'saque'.

			     if (result == 0)
			     {
			     	vSaque.disabled 	   =  true;
	  				btnSaque.disabled    =  true;	
			     }

// Atualiza o saldo do usuário.

			     let userId       =   sessionStorage.getItem('userId'); 	
			     let alterar 	    =   firebase.database().ref("bancojs/usuarios/" + userId);
			     let historico 	  =   firebase.database().ref("bancojs/usuarios/" + userId + "/mensagens");
			     let saldoAtual   =   sessionStorage.getItem('userSaldo');
			     
			     alterar.update 
			     ({
			     	 saldo: saldoAtual

			     });

			    historico.push 
				({

					operacao: 'Saque',
				  opdata:   dia(),
					valor:    vSaque.value

				});
			     

			});




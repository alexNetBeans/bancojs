// Faz deposito, adicionando valor informado pelo usuário ao seu saldo atual.
					
			let btnDepos  =  document.querySelector('#btnDepos');
			let vDepos 	  =  document.querySelector('#vDepos');
			let vSaldo 	  =  document.querySelector('#saldoAtual');
      
			btnDepos.addEventListener('click', function ()
			{
			     
			    let result 	   	  =  parseInt(saldo) + parseInt(vDepos.value);
			    vSaldo.innerHTML  =  numeroReal(result); 
			    sessionStorage.setItem('userSaldo', result);

// Atualiza o saldo do usuário.

			    let userId       =   sessionStorage.getItem('userId'); 	
			    let alterar 	   =   firebase.database().ref("bancojs/usuarios/" + userId);
			    let historico 	 =   firebase.database().ref("bancojs/usuarios/" + userId + "/mensagens");
			    let saldoAtual   =   sessionStorage.getItem('userSaldo');
			     
			     alterar.update 
			     ({
			     	 saldo: saldoAtual

			     });

			     historico.push 
				({

					operacao:  'Deposito',
					opdata: dia(),
					valor: vDepos.value

				});

			});

			


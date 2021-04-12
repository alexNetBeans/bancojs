			    
function geraHistorico()

{
	let userId    =   sessionStorage.getItem('userId'); 	
	let historico =   firebase.database().ref("bancojs/usuarios/" + userId + "/mensagens");
	let content   =   "";

	historico.orderByChild('mensagens').on('child_added', function (data)

	{
	   content = content + "<tr><td>" + data.val().operacao + "<td>" + data.val().opdata + "<td>" + numeroReal(parseInt(data.val().valor)) 
       +  "<td><a href='#' id=" +  data.key  + " onClick='alert(this.id)'>Apagar</a>";
	   a.innerHTML = content;

	});        

}
function consultaCep() {
	let cep = document.getElementById("cep").value;
	let url = "https://viacep.com.br/ws/" + cep + "/json/";
	$.ajax({
		url: url,
		type: "GET",
		success: function(response) {
			$("#logradouro").html(response.logradouro);
			$("#bairro").html(response.bairro);
			$("#localidade").html(response.localidade);
			$("#uf").html(response.uf);
		}
	})
}
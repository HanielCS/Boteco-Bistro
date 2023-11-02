document.addEventListener('DOMContentLoaded', function() {
  const enviarWhatsappButton = document.getElementById('enviarWhatsapp');

function abrirWhatsapp() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementByID("email").value;
  var telefone = document.getElementById("telefone").value;
  var data = document.getElementById("data").value;
  var hora = document.getElementById("hora").value;
  var num_pessoas = document.getElementById("num_pessoas").value;
  var msg = document.getElementById("msg").value;
  
  var url = "https://wa.me/5575991232281?text="
  + "*Formulário de Reserva*"
  + "%0a"
  + "%0aNome: " + nome "%0a"
  + "%0aEmail: " + email "%0a"
  + "%0aTelefone: " + telefone "%0a"
  + "%0aData: " + data "%0a"
  + "%0aHora: " + hora "%0a"
  + "%0aNúmero de pessoas: " + num_pessoas "%0a"
  + "%0aMensagem: " + msg;
  window.open(url, '_blank').focus();
}
  
});

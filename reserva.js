function abrirWhatsapp() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  var data = document.getElementById("data").value;
  var hora = document.getElementById("hora").value;
  var num_pessoas = document.getElementById("num_pessoas").value;
  var msg = document.getElementById("msg").value;

  var num_telefone = "+5575991232281";

  var url = "https://wa.me/" + num_telefone + "?text=" +
    "*Formulário de Reserva*" +
    "%0a" +
    "*Nome:* " + nome + "%0a" +
    "*Email:* " + email + "%0a" +
    "*Telefone:* " + telefone + "%0a" +
    "*Data:* " + data + "%0a" +
    "*Hora:* " + hora + "%0a" +
    "*Número de pessoas:* " + num_pessoas + "%0a" +
    "*Mensagem:* " + msg;

  var btnWhatsapp = documnent.getElementById("enviarWhatsapp");
  btnWhatsapp.disabled = true;

  setTimeout(function() {
    btnWhatsapp.disabled = false;
  }, 5000);

  window.open(url, '_blank').focus();
}

document.getElementById("enviarEmail").addEventListener("click", function(event) {
  var form = document.getElementById("formReserva");
  event.preventDefault();
  form.submit();
});

document.getElementById("enviarWhatsapp").addEventListener("click", function(event) {
  event.preventDefault();
  abrirWhatsapp();
});
<? 

$destinatario = "carvalho.hanielx@gmail.com.br";

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING); // filter_input filtra os dados
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL); // filter_validate_email valida o email
$telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING); // filter_sanitize_string limpa os caracteres especiais
$data = filter_input(INPUT_POST, 'data', FILTER_SANITIZE_STRING); // input_post recebe os dados do formulario
$hora = filter_input(INPUT_POST, 'hora', FILTER_SANITIZE_STRING);
$num_pessoas = filter_input(INPUT_POST, 'num_pessoas', FILTER_SANITIZE_STRING);
$mensagem = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_STRING);
$assunto = filter_input(INPUT_POST, 'assunto', FILTER_SANITIZE_STRING);

$body = "===============================" . "\n");
$body .= "RESERVA" . "\n";
$body .= "===============================" . "\n";
$body .= "Nome: " . $nome . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Telefone: " . $telefone . "\n";
$body .= "Data: " . $data . "\n";
$body .= "Hora: " . $hora . "\n";
$body .= "Número de pessoas: " . $num_pessoas . "\n";
$body .= "Mensagem: " . $mensagem . "\n";

$headers = "From: " . $email . "\r\n";

if(mail($destinatario, $assunto, $body, $headers)) {
  echo "E-mail enviado com sucesso!";
} else {
  echo "E-mail não enviado!";
}

?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se os campos do formulário estão definidos
    if (isset($_POST['nome']) && isset($_POST['email']) && isset($_POST['telefone']) && isset($_POST['data']) && isset($_POST['hora']) && isset($_POST['num_pessoas']) && isset($_POST['mensagem'])) {

        $nome = addslashes($_POST['nome']);
        $email = addslashes($_POST['email']);
        $telefone = addslashes$_POST(['telefone']);
        $data = addslashes($_POST['data']);
        $hora = addslashes($_POST['hora']);
        $num_pessoas = addslashes($_POST['num_pessoas']);
        $mensagem = addslashes($_POST['mensagem']);

        $to = "carvalho.hanielx@gmail.com.br"; // E-mail que vai receber o form
        $subject = "Reserva de Serviço"; // Assunto do E-mail

        // Corpo do e-mail
        $body = "===============================\n";
        $body .= "RESERVA\n";
        $body .= "===============================\n";
        $body .= "Nome: " . $nome . "\n";
        $body .= "Email: " . $email . "\n";
        $body .= "Telefone: " . $telefone . "\n";
        $body .= "Data: " . $data . "\n";
        $body .= "Hora: " . $hora . "\n";
        $body .= "Número de pessoas: " . $num_pessoas . "\n";
        $body .= "Mensagem: " . $mensagem . "\n";

        $header = "From:contato.haniel.c@gmail.com"."\r\n".
                  "Reply-To".$email."\r\n".
                  "X=Mailer:PHP/".phpversion();

        if(mail($to, $subject, $body, $header)) {
            echo "E-mail enviado com sucesso!";
        } else {
            echo "Erro ao enviar o e-mail.";
        }
    } else {
        echo "Todos os campos do formulário devem estar preenchidos.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>

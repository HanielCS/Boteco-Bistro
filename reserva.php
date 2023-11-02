<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se os campos do formulário estão definidos
    if (isset($_POST['nome']) && isset($_POST['email']) && isset($_POST['telefone']) && isset($_POST['data']) && isset($_POST['hora']) && isset($_POST['num_pessoas']) && isset($_POST['mensagem'])) {
        $destinatario = "carvalho.hanielx@gmail.com.br";

        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
        $data = $_POST['data'];
        $hora = $_POST['hora'];
        $num_pessoas = $_POST['num_pessoas'];
        $mensagem = $_POST['mensagem'];
        $assunto = "Assunto da Reserva";

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

        $headers = "From: " . $email . "\r\n"; // Endereço de e-mail do remetente

        if(mail($destinatario, $assunto, $body, $headers)) {
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

<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/phpmailer/phpmailer/src/Exception';
require 'vendor/phpmailer/phpmailer/src/PHPMailer';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['nome']) && isset($_POST['email']) && isset($_POST['telefone']) && isset($_POST['data']) && isset($_POST['hora']) && isset($_POST['num_pessoas']) && isset($_POST['mensagem'])) {
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
        $data = $_POST['data'];
        $hora = $_POST['hora'];
        $num_pessoas = $_POST['num_pessoas'];
        $mensagem = $_POST['mensagem'];

        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com'; // Substitua pelo servidor SMTP
            $mail->SMTPAuth = true;
            $mail->Username = 'servernenhum@gmail.com'; // Substitua pelo seu endereço de e-mail
            $mail->Password = 'nadaDemaisBolinha31122000'; // Substitua pela sua senha de e-mail
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;
        
            $mail->setFrom('contato.haniel.c@gmail.com', 'Nome Remetente'); // Substitua pelo seu endereço de e-mail e nome
            $mail->addAddress('carvalho.hanielx@gmail.com.br'); // Substitua pelo e-mail do destinatário
            $mail->isHTML(true);
        
            $mail->Subject = 'Reserva de Serviço';
            $mail->Body    = "<strong>RESERVA</strong><br><br>" .
                             "Nome: $nome<br>" .
                             "Email: $email<br>" .
                             "Telefone: $telefone<br>" .
                             "Data: $data<br>" .
                             "Hora: $hora<br>" .
                             "Número de pessoas: $num_pessoas<br>" .
                             "Mensagem: $mensagem";
        
            $mail->send();
            echo "E-mail enviado com sucesso!";
        } catch (Exception $e) {
            echo "Erro ao enviar o e-mail: {$mail->ErrorInfo}";
        }
    } else {
        echo "Todos os campos do formulário devem estar preenchidos.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>

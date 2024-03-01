<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Получение данных из формы
$username = $_POST["username"];
$email = $_POST["email"];
$message = $_POST["message"];
$captchaDigits = $_POST["captchaDigits"];

error_log("Username: " . $username);
error_log("Email: " . $email);
error_log("Message: " . $message);
error_log("CaptchaDigits: " . $captchaDigits);

// Отправка письма на указанные адреса
$toEmails = array("negdana22@gmail.com","iriy999@gmail.com");
$subject = "Новое сообщение от $username";
$messageBody = "Имя: $username\nEmail: $email\nСообщение: $message";

// Дополнительные заголовки
$headers = "From: test@a0915135.xsph.ru\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Установка явного адреса отправителя (Return-Path)
ini_set("sendmail_from", $email);

// Добавление дополнительных параметров к mail
$additional_parameters = "-oi -f $email";

// Отправка письма
$success = true; // Флаг успешной отправки письма

foreach ($toEmails as $toEmail) {
    if (!mail($toEmail, $subject, $messageBody, $headers, $additional_parameters)) {
        // Лог: Ошибка при отправке письма на адрес $toEmail
        error_log("Ошибка при отправке письма на адрес $toEmail");
        file_put_contents('log.txt', "Ошибка при отправке письма на адрес $toEmail\n", FILE_APPEND);
        $success = false; // Установка флага ошибки
    }
}

if ($success) {
    // Если не было ошибок, выводим "success"
    echo "success";
} else {
    // Если были ошибки, вы можете вернуть текст ошибки или что-то еще
    error_log("Ошибка при отправке данных на сервер.");
}
?>

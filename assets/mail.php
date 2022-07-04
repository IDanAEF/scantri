<?php
    $messText = "";
    $subj = "";
    if ($_POST['form_type'] == 'order') {
        $subj = 'Бронь транспорта';
        $messText = "
            Имя: ".$_POST['name']."
            Транспорт: ".$_POST['car']."
            Класс обслуживания: ".$_POST['type']."
            Телефон: ".$_POST['phone']."
        ";
    } else if ($_POST['form_type'] == 'appl') {
        $subj = 'Заявка';
        $messText = "
            Имя: ".$_POST['name']."
            E-mail: ".$_POST['email']."
            Телефон: ".$_POST['phone']."
        ";
    } else if ($_POST['form_type'] == 'call') {
        $subj = 'Звонок';
        $messText = "
            Имя: ".$_POST['name']."
            Телефон: ".$_POST['phone']."
        ";
    }

    $from = "e.dev@german-web.ru";
    $to = "e.dev@german-web.ru";
    $subject = "Scantri-Landing: Сообщение с формы обратной связи - " . $subj;
    $message = "Информационное сообщение Scantri-Landing
        ------------------------------------------
        
        Вам было отправлено сообщение через форму обратной связи - ".$subj."
        
        ".$messText."
        
        Сообщение сгенерировано автоматически";
    $headers = "From:" . $from. "\r\n";
    $headers .= "Content-Type: text/plain;\r\n charset='UTF-8'\r\n Content-Transfer-Encoding: 8bit";
    mail($to,$subject,$message, $headers);
?>
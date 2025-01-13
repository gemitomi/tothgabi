<?php

// Segédfüggvény a bemeneti adatok tisztításához
function clean_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$messageBox = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['send'])) {

    // Bemeneti adatok tisztítása
    $name = clean_input($_POST['name'] ?? '');
    $email = clean_input($_POST['email'] ?? '');
    $mobil = clean_input($_POST['mobil'] ?? '');
    $message = clean_input($_POST['message'] ?? '');
    $subject = "Érdeklődés";

    // Ellenőrzés, hogy minden szükséges mező ki van-e töltve
    if (!empty($name) && !empty($mobil)  && !empty($email) &&  !empty($message)) {

        // Email törzs összeállítása
        $body = "Név: " . $name . "\r\n<br/>";
        $body .= "Telefonszám: " . $mobil . "\r\n<br/>";
        $body .= "Üzenet: " . $message . "\r\n<br/>";

        // Email fejléc összeállítása
        $mailheader = 'MIME-Version: 1.0' . "\r\n";
        $mailheader .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $mailheader .= "From: " . $name . " <" . $email . ">\r\n";

        $recipient = "ggabriella.toth@gmail.com";

        // Email küldése
        if (mail($recipient, $subject, $body, $mailheader)) {
            $confirmationSubject = "Visszaigazolás";
            $confirmationBody = "
            <html>
                <head>
                <title>Visszaigazolás</title>
                </head>
                <body>
                    <p>Köszönöm az érdeklődését!</p>
                    <p>Hamarosan felveszem a kapcsolatot Önnel.</p> <br>
                    <p>Kérem erre az üzenetre ne válaszoljon.</p> <br>
                   
                    <p>Üdvözlettel: <br>
                    <br>
                    <p>Tóth Gabriella</p>
                    <p></p>
                   </p>
                </body>
            </html>
            ";
            $confirmationHeaders = "From: no-reply_ggabriella.toth@gmail.com\r\n";
            $confirmationHeaders .= "MIME-Version: 1.0\r\n";
            $confirmationHeaders .= "Content-type: text/html; charset=UTF-8\r\n";

            if (mail($email, $confirmationSubject, $confirmationBody, $confirmationHeaders)) {

                $messageBox = "Email sikeresen elküldve!";
            } else {
                $messageBox = "Email sikeresen elküldve, de hiba történt a visszaigazoló email küldése során.";
            }
        } else {
            $messageBox = "Hiba történt az email küldése során.";
        }
    
    
    } else {
        $messageBox = "Kérjük, töltse ki az összes mezőt!";
    }
}
?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Küldés</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script>
        function showMessage() {
            var message = "<?php echo $messageBox; ?>";
            if (message) {
                window.location.href = "https://www.gabriellatoth.com";
            }
        }
    </script>
</head>
<body onload="showMessage()">
</body>
</html>
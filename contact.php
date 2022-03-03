<?php

if($_POST) {
    $name = "";
    $email = "";
    $email_title = "";
    $message = "";
    $email_body = "<div>";

    if(isset($_POST['name'])) {
           $visitor_name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
           $email_body .= "<div>
                              <label><b>Visitor Name:</b></label>&nbsp;<span>".$name."</span>
                           </div>";
       }
    if(isset($_POST['email'])) {
           $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
           $visitor_email = filter_var($email, FILTER_VALIDATE_EMAIL);
           $email_body .= "<div>
                              <label><b>Visitor Email:</b></label>&nbsp;<span>".$email."</span>
                           </div>";
       }
    if(isset($_POST['message'])) {
              $visitor_message = htmlspecialchars($_POST['message']);
              $email_body .= "<div>
                                 <label><b>Visitor Message:</b></label>
                                 <div>".$message."</div>
                              </div>";
          }

   $recipient = "admin@novacore.info";
   $email_body .= "</div>";
   $subject = "Where's Foster";
   $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";

if(mail($recipient, $subject, $email_body, $headers)) {
    echo "<p>Thank you for contacting us, $visitor_name. You will get a reply within 24 hours.</p>";
} else {
    echo '<p>We are sorry but the email did not go through.</p>';
}

} else {
echo '<p>Something went wrong</p>';
}

}


?>

<?php

require("./sendgrid-php/sendgrid-php.php");

$email_site = "santanadasilvadaniel@gmail.com";
$nome_site = "DanielSantanaWebdesign";

$email_user = $_POST["email"];
$nome_user = $_POST["nome"];

$body_content = "";
foreach( $_POST as $field => $value) {
  if( $field !== "leaveblank" && $field !== "dontchange" && $field !== "enviar") {
    $sanitize_value = filter_var($value, FILTER_SANITIZE_STRING);
    $body_content .= "$field: $value \n";
  }
}

$email = new \SendGrid\Mail\Mail(); 
$email->setFrom($email_site, $nome_site);
$email->addTo($email_site, $nome_site);

$email->setReplyTo($email_user, $nome_user);

$email->setSubject("Formulário Daniel Santana Webdesign");
$email->addContent("text/plain", $body_content);

$sendgrid = new \SendGrid('SG.iaNt9x92RcuGhEPP9PKc4w.WBPZSQQrcW49zI8PHS-QechzXciY7KqcYt1Y77mQI5A');
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo "Caught exception: ". $e->getMessage() ."\n";
}
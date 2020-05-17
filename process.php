<?php
if (isset($_POST['email'])){
    $admin_email ="swapnilbandil1999@gmail.com";
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $message=$_POST['message'];
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: Swapnil <bandilswapnil@gmail.com>';
    if(!mail($admin_email,"new form submission",$message . '
    - ' .$phone, $headers)) {
        echo "failed to send msg";
    } else {
        echo "success";
    }
}

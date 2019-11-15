<?php
$cardType = $_POST['cardtype'];
$cardNumber = $_POST['cardnumber'];
$expirationDate = $_POST['expdate'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cs3320";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn)
    die('Connection failed: ' . mysqli_error($conn));

$sql = "INSERT INTO `PaymentInformation` (`cardType`, `cardNumber`, `expDate`) 
        VALUES ('$cardType', '$cardNumber', '$expirationDate')";

if(!mysqli_query($conn, $sql))
    die('Error: ' . mysqli_error($conn));

mysqli_close($conn);

?>

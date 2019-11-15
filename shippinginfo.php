<?php
$address1 = $_POST['address1'];
$address2 = $_POST['address2'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zipcode'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cs3320";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn)
    die('Connection failed: ' . mysqli_error($conn));

$sql = "INSERT INTO 
        `ShippingInformation` (`address1`, `address2`, `city`, `state`, `zip`) 
        VALUES ('$address1', '$address2', '$city', '$state', '$zip')";

if(!mysqli_query($conn, $sql))
    die('Error: ' . mysqli_error($conn));

mysqli_close($conn);

?>

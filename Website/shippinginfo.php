<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cs3320";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn)
    die('Connection failed: ' . mysqli_error($conn));

if(isset($_POST['paddress']) && $_POST['paddress'] == '1') {
    $sql = "SELECT address1, address2, city, state, zip FROM `UserInformation`";
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            $address1 = $row["address1"];
            $address1 = $row["address2"];
            $city = $row["city"];
            $state = $row["state"];
            $zip = $row["zip"];
        }
    }

} else {
    $address1 = $_POST['address1'];
    $address2 = $_POST['address2'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $zip = $_POST['zipcode'];
}

$sql = "INSERT INTO 
            `ShippingInformation` (`address1`, `address2`, `city`, `state`, `zip`) 
            VALUES ('$address1', '$address2', '$city', '$state', '$zip')";

if(!mysqli_query($conn, $sql))
    die('Error: ' . mysqli_error($conn));

header("location: http://localhost:8080/Website/checkout.html");

mysqli_close($conn);

?>

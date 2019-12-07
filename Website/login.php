<?php
$email = $_POST['email'];
$pw = $_POST['password'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cs3320";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn)
    die('Connection failed: ' . mysqli_error($conn));

$sql = "INSERT INTO `UserCredentials` (`username`, `pass`) VALUES ('$email', '$pw')";

if(!mysqli_query($conn, $sql))
    die('Error: ' . mysqli_error($conn));


header("location: http://localhost:8080/Website/UserInfo.html");

mysqli_close($conn);

?>

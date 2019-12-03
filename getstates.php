<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cs3320";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn)
    die('Could not connect: ' . mysqli_error($conn));

$sql = "SELECT stateId, stateCode, stateName FROM States WHERE stateId = ?";

$result = mysqli_query($conn, $sql);

$returnStates = "[";
while($row = mysqli_fetch_array($result)) {
    $returnStates = $returnStates . "{stateCode: \"" . $row['stateCode'] . "\"," .
                                    "stateName: \"" . $row['stateName'] . "\"}, ";
}
$returnStates = $returnStates . "]";

echo $returnStates;

mysqli_close($conn);

?>

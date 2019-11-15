<?php
$name = $_POST['fname'];
$address1 = $_POST['street'];
$address2 = $_POST['street2'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cs3320";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn)
    die('Connection failed: ' . mysqli_error($conn));
/*else
	echo "Connected successfully!<br>";*/

// insert states
$sql = "INSERT INTO `States` (`stateCode`, `stateName`) 
        VALUES ('AK', 'Alaska'),
                ('AZ', 'Arizona'),
                ('AR', 'Arkansas'),
                ('CA', 'California'),
                ('CO', 'Colorado'),
                ('CT', 'Connecticut'),
                ('DE', 'Delaware'),
                ('DC', 'District of Columbia'),
                ('FL', 'Florida'),
                ('GA', 'Georgia'),
                ('HI', 'Hawaii'),
                ('ID', 'Idaho'),
                ('IL', 'Illinois'),
                ('IN', 'Indiana'),
                ('IA', 'Iowa'),
                ('KS', 'Kansas'),
                ('KY', 'Kentucky'),
                ('LA', 'Louisiana'),
                ('ME', 'Maine'),
                ('MD', 'Maryland'),
                ('MA', 'Massachusetts'),
                ('MI', 'Michigan'),
                ('MN', 'Minnesota'),
                ('MS', 'Mississippi'),
                ('MO', 'Missouri'),
                ('MT', 'Montana'),
                ('NE', 'Nebraska'),
                ('NV', 'Nevada'),
                ('NH', 'New Hampshire'),
                ('NJ', 'New Jersey'),
                ('NM', 'New Mexico'),
                ('NY', 'New York'),
                ('NC', 'North Carolina'),
                ('ND', 'North Dakota'),
                ('OH', 'Ohio'),
                ('OK', 'Oklahoma'),
                ('OR', 'Oregon'),
                ('PA', 'Pennsylvania'),
                ('RI', 'Rhode Island'),
                ('SC', 'South Carolina'),
                ('SD', 'South Dakota'),
                ('TN', 'Tennessee'),
                ('TX', 'Texas'),
                ('UT', 'Utah'),
                ('VT', 'Vermont'),
                ('VA', 'Virginia'),
                ('WA', 'Washington'),
                ('WV', 'West Virginia'),
                ('WI', 'Wisconsin'),
                ('WY', 'Wyoming')";


if(!mysqli_query($conn, $sql))
    die('Error: ' . mysqli_error($conn));

// insert user info
$sql = "INSERT INTO 
        `UserInformation` (`fullname`, `address1`, `address2`, `city`, `state`, `zip`, `phone`, `email`)
        VALUES 
        ('$name', '$address1', '$address2', '$city', '$state', '$zip', '$phone', '$email')";

// test insertion
//echo $sql;

if(!mysqli_query($conn, $sql))
	die('Error: ' . mysqli_error($conn));
/*else
    echo "<br>New record created successfully<br>";*/

/*$sql = "SELECT userId, fullname, address1, address2, city, state, zip, phone, email
          FROM UserInformation WHERE userId = ?";
$result = mysqli_query($conn, $sql);*/

mysqli_close($conn);

?>
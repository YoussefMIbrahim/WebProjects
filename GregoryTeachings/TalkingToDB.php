<?php
	$dbhost="localhost";
    $dbname="customers";
    $dbuser="root";
    $dbpassword="";

    $con=@mysqli_connect($dbhost,$dbuser,$dbpassword,$dbname);

$query= "select * from customerInformation";
$cust_query= mysqli_query($con,$query);
?>

<html>
<head>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
</head>
<body>
<button id="hideButton">Click me!</button>

<table id="tableHide">
    <tr>
        <th>Info for this human</th>
        <?php
			while($customer = mysqli_fetch_assoc($cust_query)) {
		?>

        <td><?=$customer['fullName']?></td>
        <td><?=$customer['email']?></td>
        <td><?=$customer['phone']?></td>

    </tr>
        <?php
            }?>
</table>

<script>
    $("#hideButton").click(function () {
        $("#tableHide").toggle();
    });
</script>

</body>
</html>
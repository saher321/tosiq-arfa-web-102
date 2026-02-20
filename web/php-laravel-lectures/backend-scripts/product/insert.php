<?php
include "../../config/init_session.php";
include "../../config/db.php";

$pn     = $_POST['pname'];
$pc     = $_POST['pcat'];
$pr     = $_POST['price'];
$pd     = $_POST['pdesc'];

$query  = "insert into products (name, category, price, description) values('$pn', '$pc', $pr, '$pd')";

$result = mysqli_query($connection, $query);

if ($result) {

    $_SESSION['response'] = [
        'status' => true,
        'message'=> "Data added successfully"
    ];

    header("Location: ../../product-form.php");

} else {
    $_SESSION['response'] = [
        'status' => false,
        'message'=> "Failed to insert data"
    ];
}

?>
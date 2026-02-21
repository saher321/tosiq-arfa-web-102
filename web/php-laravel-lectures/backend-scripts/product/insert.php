<?php
include "../../config/init_session.php";
include "../../config/db.php";

$pn     = $_POST['pname'];
$pi     = $_FILES['pimg']['name'];
$pc     = $_POST['pcat'];
$pr     = $_POST['price'];
$pd     = $_POST['pdesc'];

$query  = "insert into products (name, image, category, price, description) values('$pn', '$pi', '$pc', $pr, '$pd')";

$result = mysqli_query($connection, $query);

if ($result) {

    $_SESSION['response'] = [
        'status' => true,
        'message'=> "Data added successfully"
    ];

    $upload_path = '../../uploads/products/' . $pi;
    
    move_uploaded_file($_FILES['pimg']['tmp_name'], $upload_path);

    header("Location: ../../product-form.php");

} else {
    $_SESSION['response'] = [
        'status' => false,
        'message'=> "Failed to insert data"
    ];
}

?>
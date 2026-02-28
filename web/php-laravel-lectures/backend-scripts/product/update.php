<?php
include "../../config/init_session.php";
include "../../config/db.php";

    $id     = $_POST['id'];
    $pn     = $_POST['pname'];
    $pi     = $_FILES['pimg']['name'];
    $pc     = $_POST['pcat'];
    $pr     = $_POST['price'];
    $pd     = $_POST['pdesc'];

    if ($pi) {
        $query  = "update products set name='$pn', image='$pi', category='$pc', price=$pr, description='$pd' where id = $id";

        $result = mysqli_query($connection, $query);

    } else {
        $query  = "update products set name='$pn', category='$pc', price=$pr, description='$pd' where id = $id";

        $result = mysqli_query($connection, $query);
    }

    if ($result) {

        $_SESSION['update_response'] = [
            'status' => true,
            'message'=> "Update data successfully"
        ];

        $upload_path = '../../uploads/products/' . $pi;

        move_uploaded_file($_FILES['pimg']['tmp_name'], $upload_path);

        header("Location: ../../views/product-list.php");

    } else {
        $_SESSION['update_response'] = [
            'status' => false,
            'message'=> "Failed to update data"
        ];
    }
?>
<?php
    include "../../config/db.php";

    $id = $_GET['id'];
    if ($id > 0){

        $query = "delete from products where id=$id";
        mysqli_query($connection, $query);

        header("Location: ../../views/product-list.php");

    } else {
        echo "Failed to delete product";
        die;
    }


?>
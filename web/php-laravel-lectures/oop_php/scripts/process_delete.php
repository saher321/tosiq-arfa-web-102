<?php
    session_start();
    include "../classes/db.php";
    include "../classes/product.php";

    $id = $_GET['id'];
    $res = $product->delete($id);
    if($res){
        $_SESSION['msg'] = "Product is deleted successfully.";
        header("location: ../views/product-list.php");
    } else {
        echo "Action is performed or maybe product is deleted.";
    }
?>
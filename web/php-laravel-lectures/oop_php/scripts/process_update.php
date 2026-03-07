<?php
    include "../classes/db.php";
    include "../classes/product.php";

    $id = $_POST['id'];
    $name = $_POST['pname'];
    $category = $_POST['pcat'];
    $description = $_POST['pdesc'];
    $price = $_POST['price'];
    $product->update($id, $name, $category, $description, $price);

    header("location: ../views/product-list.php");

?>
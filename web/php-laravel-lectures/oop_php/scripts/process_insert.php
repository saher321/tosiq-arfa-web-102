<?php
    include "../classes/db.php";
    include "../classes/product.php";

    $name = $_POST['name'];
    $category = $_POST['category'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    
    $product->insert($name, $category, $description, $price);
    
    header("location: ../views/product-list.php");
?>
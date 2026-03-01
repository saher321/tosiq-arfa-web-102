<?php 
    class Product extends DB{

        function all_products(){
            $q = "select * from products";
            return $db->query($q);
        }

    }

    $product = new Product();
?>
<?php 
    class Product extends DB{

        function all_products(){
            $q = "select * from products";
            return $this->query($q);
        }

        function single_product($id){
            $q = "select * from products where id=$id";
            $raw_query = $this->query($q);
            $single_row = mysqli_fetch_assoc($raw_query);
            return $single_row;
        }

    }

    $product = new Product();
?>
<?php 
    class Product extends DB{

        function all_products(){
            $q = "select * from products";
            return $this->query($q);
        }

        function insert($name, $category, $description, $price){
            $q = "insert into products (name, category, description, price) values ('$name', '$category', '$description', '$price')";
            return $this->query($q);
        }

        function single_product($id){
            $q = "select * from products where id=$id";
            $raw_query = $this->query($q);
            $single_row = mysqli_fetch_assoc($raw_query);
            return $single_row;
        }

        function delete($id){
            $q = "delete from products where id=$id";
            return $this->query($q);
        }
        
        function update($id, $name, $category, $description, $price){
            $q = "update products set name='$name', category='$category', description='$description', price='$price' where id=$id";
            return $this->query($q);
        }

    }

    $product = new Product();
?>
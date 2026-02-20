<?php
    try{
        $connection = mysqli_connect("localhost", "root", "", "crud_102");
    } catch (Exception $e) {
        echo "Failed to connect database: " . $e->getMessage();
        die;
    }
?>
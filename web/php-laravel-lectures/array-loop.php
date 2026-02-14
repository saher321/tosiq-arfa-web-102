<?php

    $index_arr1 = ["Shoes", "USB Drive", "Computer", "Key"];

    foreach($index_arr1 as $item) {
        echo $item. "<br>";
    }


    $associative_array = [
        "name" => "Talha",
        "age" => 45,
        "email" => "talha@email.com",
        "hobbies" => ["Reading books", "Browsing internet"]
    ];

    
    // echo $index_arr1[2] . "<br />";
    echo $associative_array["email"] . " ". $associative_array["hobbies"][1];

?>
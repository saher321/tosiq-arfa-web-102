<?php

    if (isset($_POST["submit"])){
        $name = $_POST["username"];

        echo $name; 
    }
    // $index_arr1 = ["Shoes", "USB Drive", "Computer", "Key"];

    // foreach($index_arr1 as $item) {
    //     echo $item. "<br>";
    // }
    // // list.map((item) => {}) 

    // $associative_array = [
    //     "name" => "Talha",
    //     "age" => 45,
    //     "email" => "talha@email.com",
    //     "hobbies" => "Reading books"
    // ];

    // // echo $index_arr1[2] . "<br />";
    // echo $associative_array["email"] . " ". $associative_array["hobbies"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


        <form method="post">
            <input type="text" name="username" placeholder="Provide username">

            <button type="submit" name="submit">Submit</button>

        </form>
</body>
</html>
<?php
include "./config/init_session.php";

error_reporting(~E_ALL);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>
        Product form
    </h1>

    
    <?php
    if ( isset($_SESSION['response']) && $_SESSION['response']['status'] == true){
        echo $_SESSION['response']['message'];
    } else {
        echo $_SESSION['response']['message'];
    }
    
    ?>
    <form action="./backend-scripts/product/insert.php" method="post">
        <input type="text" name="pname" placeholder="Enter product name">
        <br><br>
        <input type="text" name="pcat" placeholder="Enter product category">
        <br><br>
        <input type="number" name="price" placeholder="Enter product price">
        <br><br>

        <textarea name="pdesc" id="" cols="30" rows="10" placeholder="Enter description"></textarea>
        <br><br>
        <button type="submit" name="submitbtn">Submit</button>
    </form>
</body>
</html>
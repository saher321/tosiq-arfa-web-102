<?php
    $user = [ "name" => "Tosiq", "age" => "20" ];

    // programming
    // sessions
    // class function
    // REST APIS: Create, Read, Update, Delete
    $subject1 = 89;
    $subject2 = 76;
    $sum = $subject1 + $subject2;
    $avg = $sum/2;
    echo $avg;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Php page</h1>
    
    <?php
    echo $user["name"]. " " .$user["age"];
    ?>

</body>
</html>
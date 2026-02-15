<?php
include("./config/init_session.php");

if(isset($_POST['submitbtn'])){
    $n = $_POST["username"];

    $_SESSION['user'] = $n;
    // localstorage.setItem("user", n);

    header('Location: ./contact.php');
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <label for="">User name</label>
        <input type="text" name="username" required>
        <button type="submit" name="submitbtn">Submit</button>
    </form>
</body>
</html>
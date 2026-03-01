<?php
    include "../classes/db.php";
    include "../classes/product.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $data = $product->all_products();
        foreach($data as $item){
    ?>
    <h4>
        <a href="./product-details.php?id=<?php echo $item['id']?>">
            <?php echo $item['name']?>
        </a>
    </h4>
    <?php
        }
    ?>
</body>
</html>
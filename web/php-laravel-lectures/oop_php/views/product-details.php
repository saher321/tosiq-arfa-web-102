<?php 
    include "../classes/db.php";
    include "../classes/product.php";

    $id = $_GET['id'];
    $single_product = $product->single_product($id);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">

</head>
<body>
    <h1>Product details</h1>
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th colspan="2">
                    Product #<?php echo $single_product['id']?>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Name</td>
                <td>
                    <?php echo $single_product['name']?>
                </td>
            </tr>
            <tr>
                <td>Category</td>
                <td>
                    <?php echo $single_product['category']?>
                </td>
            </tr>
            <tr>
                <td>Description</td>
                <td>
                    <?php echo $single_product['description']?>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
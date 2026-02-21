<?php 
    include "../config/db.php";
    include './templates/top.php';

    $query = "select * from products";
    $products = mysqli_query($connection, $query);

?>

<div class="p-5 container">

    <div class="mb-4 d-flex align-items-center justify-content-between">
        <h3>
            Products
        </h3>
        <div>
            <a href="./product-form.php" class="btn btn-success">
                Add new product
            </a>
        </div>
    </div>
    <table class="table table-bordered table-striped table-hover">
        <thead>
            <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>More</th>
            </tr>
        </thead>
        <tbody>
            <?php 
            foreach($products as $product){
            ?>
            <tr>
                <td><?php echo $product['id']?></td>
                <td>
                    <img src="../uploads/products/<?php echo $product['image']?>" width="56" alt="">
                </td>
                <td><?php echo $product['name']?></td>
                <td><?php echo $product['category']?></td>
                <td><?php echo $product['price']?></td>
                <td>
                    Edit / Delete
                </td>
            </tr>
            <?php
            }
            ?>
        </tbody>
    </table>

</div>

<?php include './templates/bottom.php'?>
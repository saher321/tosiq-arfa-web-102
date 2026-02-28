<?php 
    include "../common/global.php";
    include "../config/db.php";
    include './templates/top.php';

    $query = "select * from products";
    $products = mysqli_query($connection, $query);

?>

<div class="p-5 container">
    <h2>
        <?php 
        echo APP_NAME;
        ?>
    </h2>
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

    <?php
        if ($_SESSION['update_response']['status'] == true){
        ?>

        <div class="alert alert-primary alert-dismissible fade show" role="alert">
            <strong>Updated!</strong>
            <?php echo $_SESSION['update_response']['message'];?>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        <?php
        }    
        unset($_SESSION['update_response']);
        ?>

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
            $i = 0;
            foreach($products as $product){
                $i++;
            ?>
            <tr>
                <td><?php echo $i?></td>
                <td>
                    <img src="
                    <?php
                        if ($product['image'] == null){
                    ?>
                    ../assets/images/dummy-image.jpg
                    <?php
                        } else {
                    ?>
                    ../uploads/products/<?php echo $product['image']?>
                    <?php
                        }
                    ?>
                    " width="56" alt="">
                </td>
                <td><?php echo $product['name']?></td>
                <td><?php echo $product['category']?></td>
                <td><?php echo $product['price']?></td>
                <td>
                    <a href="./product-details.php?id=<?php echo $product['id']?>">
                        Edit
                    </a> / 
                    <!-- <a href="../backend-scripts/product/delete.php?id=<php echo $product['id']?>"> Delete
                        </a> -->
                        <a href="#" onclick="deleteProduct(<?php echo $product['id']?>)">
                            Delete
                        </a>
                </td>
            </tr>
            <?php
            }
            ?>
        </tbody>
    </table>

</div>


<script>
    function deleteProduct(id){
        if (confirm("Delete this product?")){
            window.location.href = `../backend-scripts/product/delete.php?id=${id}`;
        } else {
            return;
        }
    }
</script>

<?php include './templates/bottom.php'?>
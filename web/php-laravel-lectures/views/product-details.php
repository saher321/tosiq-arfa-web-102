<?php 
    include "../common/global.php";
    include "../config/db.php";

    $id = $_GET['id'];

    if ($id > 0){
        $query = "select * from products where id=$id";

        $row = mysqli_query($connection, $query);

        $product = mysqli_fetch_assoc($row);
    } else {
        echo "Id not found!";
        return;
    }
?>


<?php include './templates/top.php'?>
    <div class="p-5 container">
        <div class="mb-4 d-flex align-items-center justify-content-between">
            <h3>
                Edit Product Details
            </h3>
            <div>
                <a href="./product-list.php" class="btn btn-primary">
                    View products
                </a>
            </div>
        </div>


        <form action="../backend-scripts/product/update.php" method="post" enctype="multipart/form-data" class="row g-3">
            <input type="hidden" name="id" value="<?php echo $product['id']?>">
            <div class="col-md-6">
                <label for="name" class="form-label">Name</label>
                <input type="text" value="<?php echo $product['name']?>" name="pname" placeholder="Enter product name" class="form-control" id="name">
            </div>
            <div class="col-md-6">
                <label for="file" class="form-label">
                    Image
                    <small class="fw-bold text-success">
                        <?php 
                            if (isset($product['image'])){
                                echo "(Image exist already)";
                            } else {
                                echo "(No image exist, try new one)";
                            }
                        ?>
                    </small>
                </label>
                <input type="file" accept=".png, .jpg, .jpeg" name="pimg" class="form-control" id="file">
            </div>
            <div class="col-md-6">
                <label for="category" class="form-label">Category</label>
                <input type="text" value="<?php echo $product['category']?>" class="form-control" id="category" name="pcat" placeholder="Enter product category">
            </div>
            <div class="col-md-6">
                <label for="price" class="form-label">Price</label>
                <input type="number" value="<?php echo $product['price']?>" class="form-control" id="price" name="price" placeholder="Enter product price">
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Description</label>
            <textarea class="form-control" name="pdesc" placeholder="Enter product description" id="exampleFormControlTextarea1" rows="3"><?php echo $product['description']?></textarea>
            </div>
            
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>

    </div>

<?php include './templates/bottom.php'?>

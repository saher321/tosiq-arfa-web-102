
<?php include './templates/top.php'?>
    <div class="p-5 container">
        <div class="mb-4 d-flex align-items-center justify-content-between">
            <h3>
                Add Product
            </h3>
            <div>
                <a href="./product-list.php" class="btn btn-primary">
                    View products
                </a>
            </div>
        </div>

    
        <?php
        if ($_SESSION['insert_response']['status'] == true){
        ?>

        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong>
            <?php echo $_SESSION['insert_response']['message'];?>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        <?php
        }   
        unset($_SESSION['insert_response']);
        ?>

        <form action="../backend-scripts/product/insert.php" method="post" enctype="multipart/form-data" class="row g-3">
            <div class="col-md-6">
                <label for="name" class="form-label">Name</label>
                <input type="text" name="pname" placeholder="Enter product name" class="form-control" id="name">
            </div>
            <div class="col-md-6">
                <label for="file" class="form-label">Image</label>
                <input type="file" accept=".png, .jpg, .jpeg" name="pimg" class="form-control" id="file">
            </div>
            <div class="col-md-6">
                <label for="category" class="form-label">Category</label>
                <input type="text" class="form-control" id="category" name="pcat" placeholder="Enter product category">
            </div>
            <div class="col-md-6">
                <label for="price" class="form-label">Price</label>
                <input type="number" class="form-control" id="price" name="price" placeholder="Enter product price">
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Description</label>
            <textarea class="form-control" name="pdesc" placeholder="Enter product description" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </form>

    </div>

<?php include './templates/bottom.php'?>

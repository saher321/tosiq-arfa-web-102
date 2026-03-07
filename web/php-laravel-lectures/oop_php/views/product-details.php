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
    
    <div class="py-5 container">
        <h1>Product details</h1>
        
        <form action="../scripts/process_update.php" method="post" enctype="multipart/form-data" class="row g-3">
            <input type="hidden" name="id" value="<?php echo $single_product['id']?>">
            <div class="col-md-6">
                <label for="name" class="form-label">Name</label>
                <input type="text" value="<?php echo $single_product['name'] ?>" name="pname" placeholder="Enter product name" class="form-control" id="name">
            </div>
            <div class="col-md-6">
                <label for="file" class="form-label">Image</label>
                <small class="fw-bold text-success" style="font-size: 9px;">
                    <?php if ($single_product['image']){
                        echo "(Image already exist, but you can try another image)";
                        } else {
                            echo "(No image found, you can upload an image)";
                        }
                      ?>
                </small>
                <input type="file" accept=".png, .jpg, .jpeg" name="pimg" class="form-control" id="file">
            </div>
            <div class="col-md-6">
                <label for="category" class="form-label">Category</label>
                <input type="text" value="<?php echo $single_product['category'] ?>" class="form-control" id="category" name="pcat" placeholder="Enter product category">
            </div>
            <div class="col-md-6">
                <label for="price" class="form-label">Price</label>
                <input type="number" value="<?php echo $single_product['price'] ?>" class="form-control" id="price" name="price" placeholder="Enter product price">
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Description</label>
                <textarea class="form-control" name="pdesc" placeholder="Enter product description" id="exampleFormControlTextarea1" rows="3"><?php echo $single_product['description'] ?></textarea>
            </div>
            
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Update Product</button>
            </div>
        </form>
    </div>
    
</body>
</html>
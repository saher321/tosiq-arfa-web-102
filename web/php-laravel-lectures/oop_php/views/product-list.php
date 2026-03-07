<?php
    session_start();
    include "../classes/db.php";
    include "../classes/product.php";
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

    <div class="container">
        <h1>Product list</h1>  
        <?php
            if(isset($_SESSION['msg'])){
                echo "<div class='alert alert-success'>".$_SESSION['msg']."</div>";
                unset($_SESSION['msg']);
            }
        ?>          
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    $data = $product->all_products();
                    foreach($data as $item){
                ?>
                <tr>
                    <td><?php echo $item['id']?></td>
                    <td>
                        <a href="./product-details.php?id=<?php echo $item['id']?>">
                            <?php echo $item['name']?>
                        </a>
                    </td>
                    <td><?php echo $item['category']?></td>
                    <td>
                        <a href="./product-details.php?id=<?php echo $item['id']?>">
                            View Details
                        </a> | 
                        <a href="#" onclick="handleDelete(<?php echo $item['id']?>)">
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
        function handleDelete(id){
            if(confirm("Are you sure to delete this product?")){
                window.location.href = `../scripts/process_delete.php?id=${id}`;
            }
        }
    </script>
</body>
</html>
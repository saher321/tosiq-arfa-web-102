<?php
    define("APP_NAME", "Shoop");

    if($_SERVER["SERVER_NAME"] == "localhost"){
        define("URL", "http://localhost/tosiq/tosiq-arfa-web-102/web/php-laravel-lectures/views/product-list.php");
    } else {
        define("URL", "https://yourdomain.com");
    }
?>
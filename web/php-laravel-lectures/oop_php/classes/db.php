<?php
    class DB {
        private $conn;
        private $host   = "localhost";
        private $root   = "root";
        private $pswd   = "";
        private $db     = "crud_102";

        function __construct(){
            try{
                $this->conn = mysqli_connect($this->host, $this->root, $this->pswd, $this->db);
            }catch(Exception $e){
                echo "Connection error: " . $e->getMessage();
                die;
            }
        }

        function query($q){
            return mysqli_query($this->conn, $q);
        }

    }

    $db = new DB();
?>
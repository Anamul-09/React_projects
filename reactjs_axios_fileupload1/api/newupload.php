<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "reactjs_axios_fileupload";

$db_con = mysqli_connect($host, $user, $password, $dbname);


header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");

if (isset($_POST["mydata"]) && isset($_FILES["mydata1"])) {



    $data = json_decode($_POST["mydata"]);
    // print_r($data);
    $username = $data->username;
    $name = $data->name;


    $file = $_FILES["mydata1"];
    // print_r($file);

    $photo_name = $file['name'];
    $photo_temp_name = $file['tmp_name'];
    $photo_size = $file['size'];
    $error = $file['error'];

    $url = "uploads/";

    move_uploaded_file($photo_temp_name, $url . $photo_name);

    $sql = "insert into users (username, name, photo) values ('$username', '$name', '$photo_name')";
    mysqli_query($db_con, $sql);

    echo json_encode("Successfully upload");
} else {
    echo json_encode("First select file and enter submit");
}

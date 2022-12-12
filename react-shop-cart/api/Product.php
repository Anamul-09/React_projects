<?php

include_once('db_connect.php');

$sql = "SELECT * from products";

$result = mysqli_query($db_conn, $sql);


while ($row = mysqli_fetch_assoc($result)) {
    $product['id'] = $row['id'];
    $product['name'] = $row['name'];
    $product['image'] = $row['image'];
    $product['catagory'] = $row['catagory'];
    $product['seller'] = $row['seller'];
    $product['price'] = $row['price'];

    $myproducts['products'][] = $product;
}

echo json_encode(['Success' => "Yes", 'items' => $myproducts]);

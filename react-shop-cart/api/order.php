<?php

include_once('db_connect.php');
$data = file_get_contents("php://input");
$data = json_decode($data);
$items = $data->item;
$userid = $data->user;

foreach ($items as $item) {

    $sql = "INSERT INTO orders(product_id, product_name, product_price, product_qty, user_id) VALUES ('$item->id','$item->name','$item->price','$item->quantity','$item->id')";

    mysqli_query($db_conn, $sql);
}
if (mysqli_affected_rows($db_conn) > 0) {
    echo json_encode("Your order place successfull");
}

        // insert into orders


// $sql = "SELECT * from products";

// $result = mysqli_query($db_conn, $sql);


// while ($row = mysqli_fetch_assoc($result)) {
//     $product['id'] = $row['id'];
//     $product['name'] = $row['name'];
//     $product['image'] = $row['image'];
//     $product['catagory'] = $row['catagory'];
//     $product['seller'] = $row['seller'];
//     $product['price'] = $row['price'];

//     $myproducts['products'][] = $product;
// }

// echo json_encode(['Success' => "Yes", 'items' => $myproducts]);

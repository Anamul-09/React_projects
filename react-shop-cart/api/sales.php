<?php

include_once('db_connect.php');


$sql = "SELECT * from products,orders WHERE products.id = orders.product_id";

$result = mysqli_query($db_conn, $sql);


while ($row = mysqli_fetch_assoc($result)) {
    $datas['id'] = $row['id'];
    $datas['name'] = $row['name'];
    $datas['image'] = $row['image'];
    $datas['catagory'] = $row['catagory'];
    $datas['seller'] = $row['seller'];
    $datas['price'] = $row['price'];
    $datas['product_qty'] = $row['product_qty'];
    $datas['order_time'] = $row['order_time'];

    $allorders['orders'][] = $datas;
}

echo json_encode(['Success' => "Yes", 'items' => $allorders]);

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Report() {
  const [sales, setSales] = useState({});
  useEffect(() => {
    axios
      .get(
        "http://localhost/anamul/React_projects/react-shop-cart/api/sales.php"
      )
      .then((res) => {
        console.log(res.data.items.allorders);
      });
  }, []);

  return (
    <div>
      <h1>This is Report page</h1>
    </div>
  );
}

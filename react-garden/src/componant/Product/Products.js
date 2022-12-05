import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    allprod();
  }, []);

  const allprod = async () => {
    axios
      .get(
        "http://localhost/anamul/React_projects/react-garden/Api/Allproduct.php"
      )
      .then((res) => {
        setProduct(res.data.datas.pr);
      });
  };

  const delconfirm = (id) => {
    delprod(id);
    // console.log(id)
  };

  const delprod = async (id) => {
    axios
      .post(
        "http://localhost/anamul/React_projects/react-garden/Api/delproduct.php",
        { prodid: id }
      )
      .then((res) => {
        alert(res.data.msg);
        allprod();
      });
  };

  return (
    <div>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">
            Products Page
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Product
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <label>Search your product:</label>
        <input type="search" name="" id="" />
        <br />
        <br />

        <h1 className="text-center mx-2 bg-dark text-white">
          All Product list
        </h1>
        <br />
        <br />

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Details</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          {product.map((item, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.details}</td>
                <td>{item.image}</td>
                <td>{item.price}</td>
                <td>
                  {/* <button className='btn btn-success'>Edit</button> */}
                  <Link
                    to={`/product/edit/${item.id}`}
                    className="btn btn-success"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => delconfirm(item.id)}
                    className="btn btn-danger"
                  >
                    Detelet
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>

        <Link to="/AddProduct" className="btn btn-info">
          Add new
        </Link>
      </div>
    </div>
  );
}

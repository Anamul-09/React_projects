import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);

  console.log(product);

  useEffect(() => {
    allprod();
  }, []);

  const allprod = async () => {
    axios
      .get(
        "http://localhost/anamul/React_projects/react-garden/api/products.php"
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
        "http://localhost/anamul/React_projects/react-garden/api/delproduct.php",
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
            products Page
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">products</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="bg-dark text-light text-center">All products</h1>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Details</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {product.map((item, index) => (
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.details}</td>
                  <td>{item.price}</td>
                  <td>
                    <button className="btn btn-info">Edit</button>
                    <button
                      onClick={() => delconfirm(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>

          <Link to="/product/new" className="btn btn-secondary">
            {" "}
            Add new{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

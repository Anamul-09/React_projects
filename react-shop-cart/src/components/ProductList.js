import "../App.css";

function ProductList({ product, addToCart }) {
  return (
    <div className="flex">
      {product.map((productItem, productIndex) => {
        return (
          <>
            <div style={{ width: "30%" }}>
              <div className="product-item">
                <img src={productItem.image} width="100%" />
                <p>
                  {productItem.name} | {productItem.category}{" "}
                </p>
                <p> {productItem.seller} </p>
                <p> Rs. {productItem.price} /-</p>
                <button onClick={() => addToCart(productItem)}>
                  Add To Cart
                </button>
              </div>
            </div>

            {/* <table>
              <tr>
                <th>Id</th>
                <th>Url</th>
                <th>Name</th>
                <th>Catagory</th>
                <th>Seller</th>
                <th>Price</th>
              </tr>
              <tr>
                <td>{productItem.id}</td>
                <td>
                  <img src={productItem.url} width="50%" />
                </td>
                <td>{productItem.name}</td>
                <td>{productItem.category}</td>
                <td>{productItem.seller}</td>
                <td>{productItem.price}</td>
              </tr>
            </table> */}
          </>
        );
      })}
    </div>
  );
}

export default ProductList;

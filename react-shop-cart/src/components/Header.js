import "../App.css";

function Header(props) {
  return (
    <div className="flex shopping-card">
      <div onClick={() => props.handleShow(false)}>
        <a href="/">Shopping Cart App</a>
      </div>

      <div>
        <a href="/report">Report</a>
      </div>

      <div onClick={() => props.handleShow(true)}>
        <a href="cart">
          Cart <sup> {props.count} </sup>
        </a>
      </div>
    </div>
  );
}

export default Header;

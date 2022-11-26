import { Link } from 'react-router-dom';
function Sidebar(){
    return (
        <div className="col-sm-4">
      
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
        <Link to="/" className='nav-link active'>Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/About" className='nav-link sNav '>About</Link>
        </li>
        <li className="nav-item">
        <Link to="/Contact" className='nav-link'>Contact</Link>
        </li>

        <li className="nav-item">
        <Link to="/Cars" className='nav-link'>Cars</Link>
        </li>
        <li className="nav-item">
        <Link to="/colors" className='nav-link'>Colors</Link>
        </li>

        <li className="nav-item">
        <Link to="/search" className='nav-link'>Search</Link>
        </li>

        <li className="nav-item">
        <Link to="/LifeCycle" className='nav-link'>LifeCycle</Link>
        </li>

        <li className="nav-item">
        <Link to="/UserList" className='nav-link'>UserList</Link>
        </li>
       
       
      </ul>
      <hr className="d-sm-none"/>
    </div>
    )
}

export default Sidebar;

import React, { Component } from 'react'
import { Link } from 'react-router-dom';




export default class Header extends Component {
  constructor(props){
    // console.log(props)
    super(props);
    this.props ={};
  }
  render() {
    return (
      <div>
          
    
        <div className="p-5 bg-primary text-white text-center">
     <h1>{this.props.brand}</h1>
     <p>{this.props.slogan}</p> 
   </div>
    
   <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
     <div className="container-fluid">
       <ul className="navbar-nav">
         <li className="nav-item">
         <Link to="/" className='nav-link active'>Home</Link>
         </li>
         <li className="nav-item">
         <Link to="/About" className='nav-link '>About</Link>
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
         <li className="nav-item">
            
         </li>
       </ul>
     </div>
   </nav>
       
      </div>
    )
  }
}


// function Header(props) {
//   return (
//     <>
    
//     <div className="p-5 bg-primary text-white text-center">
//   <h1>{props.brand}</h1>
//   <p>{props.slogan}</p> 
// </div>

// <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//   <div className="container-fluid">
//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <a className="nav-link active" href="#">Active</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//   </div>
// </nav>
//     </>
//   );
// }

// export default Header;

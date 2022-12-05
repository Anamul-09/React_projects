// import React, { Component } from 'react'

// export default class Test extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count : 0,
//          message : "This is count section.",

//          changeValue : ""
//       }
//     }

//     handleIncriment =() => {

//       this.setState ({
//         count:this.state.count + 1
//       })

//     }
//     handleDecriment= ()=>{
//       this.setState({
//         count:this.state.count -1 
//       })
//     }


//     handleOnChange =(e) => {
      
//       this.setState({
//         changeValue: e.target.value})
//         console.log(e.target.value) 
//       }
    
//   render() {
//     const { count,message } = this.state
//     return (
//       <div>

// <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
//         <div className="container text-center py-5">
//             <h1 className="display-3 text-white mb-4 animated slideInDown">Test Page</h1>
//             <nav aria-label="breadcrumb animated slideInDown">
//                 <ol className="breadcrumb justify-content-center mb-0">
//                     <li className="breadcrumb-item"><a href="#">Home</a></li>
//                     <li className="breadcrumb-item"><a href="#">Pages</a></li>
//                     <li className="breadcrumb-item active" aria-current="page">Test</li>
//                 </ol>
//             </nav>
//         </div>
//     </div>
    
//     <div className="container py-5">
//     <h1 className='text-center mx-2 bg-dark text-white'>This is Test page</h1>
// <br/>
// <br/>
//     <h1>Count: {count}</h1>
//     <h1>{message}</h1>

//     <button className='btn btn-info' onClick={this.handleIncriment} disabled={count===10 ? true : false} >Incriment</button>
//     <button className='btn btn-danger' onClick={this.handleDecriment} disabled={count===0 ? true : false}>Incriment</button>
       
//     <hr/>
//         <h1>Please, Write something</h1> <br/>
//         <input type={'text'} onChange={this.handleOnChange} /><br/>

//         <div>{this.state.changeValue}</div>
//     </div>

//       </div>
//     )
//   }
// }


import React from 'react'
import { useState } from 'react'
const Test = () => {
  return (
    <div>
      
    </div>
  )
}

export default Test

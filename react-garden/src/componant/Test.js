import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
         message : "This is count section."
      }
    }

    handleIncriment =() => {
        console.log("Clicked")
    }
    
  render() {
    const { count, message } = this.state
    return (
      <div>

<div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-3 text-white mb-4 animated slideInDown">Test Page</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Test</li>
                </ol>
            </nav>
        </div>
    </div>
    
    <div className="container-xxl py-5">
    <h1>This is Test page</h1>

    <h1>Count: {count}</h1>
    <h1>Message: {message}</h1>

    <button className='btn btn-info' onChange={this.handleIncriment} >Incriment</button>
       
    </div>
        
      </div>
    )
  }
}

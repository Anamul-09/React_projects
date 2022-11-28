import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditProduct = () => {

    const parms = useParams();

    useEffect(() =>{
        productone(parms.pid);
    })
    console.log("my id"+parms.pid)

   const productone= (id) => 
    axios.get('http://localhost/anamul/React_projects/react-garden/api/EditProduct.php',{prid:id})

  return (
    <div>
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s">
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
          <h1 className="bg-dark text-light text-center">Edit products</h1>

     <form className="editForm" >
    <h2> Edit Form </h2>
    <label htmlFor="name">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      
      placeholder="Enter name"/>
      
    
    <br /> <br />
    <label htmlFor="_email">Details</label>
    <input
      type="text"
      id="Details"
      name="details"
      placeholder="Enter details"/>

<br /> <br />
    <label htmlFor="Price">Price</label>
    <input
      type="text"
      id="price"
      name="price"
      placeholder="Enter price"/>
    <br /> <br />
    <input type="submit" value="update" />
  </form>

          
        </div>
      </div>

    </div>
  )
}

export default EditProduct


import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {

    const navigate = useNavigate();

    const [prodinfo, prodinfoset] = useState({
        name: "",
        details: "",
        price: "",
    });
    console.log(prodinfo);


    const onChangeValue = (e)=> {
        prodinfoset({...prodinfo , [e.target.name]:e.target.value});
    };

    const SubmitValue = async (e) => {
        e.preventDefault();
        e.persist();
        axios.post("http://localhost/anamul/React_projects/react-garden/Api/addproduct.php",{
            pname:prodinfo.name,
            pdetails:prodinfo.details,
            pprice: prodinfo.price,
        }).then((result) => {
            alert(result.data.msg);
            navigate('/Products')
        })
    }



  return (

    <>
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container text-center py-5">
        <h1 className="display-3 text-white mb-4 animated slideInDown">Add products</h1>
        <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item active" aria-current="page">products</li>
            </ol>
        </nav>
    </div>
</div>
    <div className='container'>
        <h1 className='text-center mt-2 bg-dark text-white'>Add new product</h1>
        <hr/>

        <form onSubmit={SubmitValue}>
        <div className='form-group'>
            <label>Name: </label>
            <input type="text"  placehlder="Enter your name" name="name" onChange={onChangeValue} />
        </div>
        <div className='form-group'>
            <label>Details: </label>
            <input type="text" placehlder="Enter your name" name="details" onChange={onChangeValue} />
        </div>
        <div className='form-group'>
            <label>Price: </label>
            <input type="text" placehlder="Enter your name" name="price" onChange={onChangeValue} />
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      
    </div>
    </>
  )
}

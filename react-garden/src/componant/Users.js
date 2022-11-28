import React ,{useEffect, useState} from 'react'
import  axios  from 'axios'
import { Link } from 'react-router-dom'



export default function Users() {
    useEffect( () => {
        window.scrollTo(0, 0);
        alluser();
      }, []); 
    const [isuser, setuser] =useState([]);
    const alluser = async (ids) => {
        try {
            axios.get(`http://localhost/anamul/React_projects/userApiCrud/users.php`).then(res=>{
                console.log(res.data.userlist.userdata)
                setuser(res.data.userlist.userdata)
            })
        }catch(error){
            throw error
        }
    }

    const deleteConfirm = (id) => {
        if (window.confirm("Are you sure?")) {
          deleteUser(id);
        }
      };
      const deleteUser = async (id) => {
        try {
          axios.post(`http://localhost/anamul/React_projects/userApiCrud/deleteusers.php`, { 
            userids: id,
          })
          .then(res => {
            setuser([]);
            alluser();
            return;
           })
        } catch (error) { throw error;}    
      }
   


  return (
    <div>

<div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-3 text-white mb-4 animated slideInDown">Users Page</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Users</li>
                </ol>
            </nav>
        </div>
    </div>
    

    <Link to="/insert" className='btn btn-primary'> Create User </Link>
    <hr/>
    <div className="container-xxl py-5">
   <h1>Users List</h1>
   <table className=' table table-striped'>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Acton</th>
    </tr>
    {isuser.map((item, index)=>(
        
    <tr key={item.id}>
        <td>{index+1}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>
          <span><Link  to={`Edit/${item.id}`} className="btn btn-primary mx-2"> Edit </Link></span>
          <span  onClick={() => deleteConfirm(item.id)} className="btn btn-danger"> Delete </span> </td>
    </tr>
    
   ))}
   </table>

   
       
    </div>
   
      
    </div>
  )
}

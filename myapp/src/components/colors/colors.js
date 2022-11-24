import React,{useState} from 'react';

const Colors = () => {
const [color,setColor] = useState("Red")

return (
<div className="col-sm-8">
  <h1>My colors is {color}</h1>
  <button className='btn btn-primary' onClick={()=>setColor("Blue")}>Blue</button>
  <button className='btn btn-danger' onClick={()=>setColor("Red")}>Red</button>
  <button className='btn btn-warning' onClick={()=>setColor("Yellow")}>Yellow</button>
  <button className='btn btn-success' onClick={()=>setColor("Green")}>Green</button>
  
</div>
)

};



export default Colors;

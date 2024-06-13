import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddBlog = () => {
    const[data,setData]=useState(
        
        {
            "name": "",
            "email": "",
            "password":""
            
        }
    
)
const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8081/add",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("success add")
            } else {
                alert("error")
            }
        }
    )
}
return (
<div>
    {/* <NavBar/> */}
    <br></br><h3><u><center>Add Blog</center></u></h3><br></br>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password"  id="" className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                    </div>
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center><button className="btn btn-success" onClick={readValue}>Submit</button></center>
                    </div>
                    <p>Back LogIn Click Here<Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default AddBlog

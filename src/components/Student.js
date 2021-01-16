import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './CSS/style.css';
import Menu from './Menu';
import axios from 'axios';


class Student extends Component{

    constructor(props){
		super(props);

		this.state = {
      
				studentName : "",
				email : "",
				mobile :"",
        gender :"",
        dob : "",
		
		  	batchID : props.location.editProps.editData
				
		}

		
  }


  handleChangeAll=(event)=>
  {
    this.setState({ [event.target.name]: event.target.value });
  }
  

  handleSubmit=(event)=>
  {
    event.preventDefault();

    let fdata = new FormData();
    fdata.append("sname",this.state.studentName);
    fdata.append("gender",this.state.gender);
    fdata.append("email",this.state.email);
    fdata.append("mobile",this.state.mobile);
    
    fdata.append("dob",this.state.dob);

   
    axios.post('http://localhost:3002/storeData',{sname:this.state.studentName,email : this.state.email,mobile : this.state.mobile,gender : this.state.gender,dob : this.state.dob,batchID : this.state.batchID})
    .then((response)=>{



    })
    .catch((error)=>{
      alert("error")
    })

  }

  componentDidMount=()=>
  {
    console.log("Batch id is ",this.state.batchID);
  }

    render(){
        return(
            <div>

          <div>
            <Menu />
          </div>
<div className="Parent_div">

<div  className="Child_div">
   
<form className="col-md-12" onSubmit={this.handleSubmit} >
  <p><h1 >Student</h1></p> <br></br>
     <div className="form-group">

     <div className="form-row">

                

                <div className="form-group col-md-6">
                  
                  <input type="text" className="form-control" id="sname" placeholder="Student Name"  name="studentName"  value={this.state.studentName} onChange={this.handleChangeAll} required/>
                  
                </div>

                <div className="form-group col-md-6" >                      
                  <select id="gender" className="form-control" placeholder="Gender" name="gender"  value={this.state.gender} onChange={this.handleChangeAll} >
                    <option selected>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className="form-group col-md-6">
                  
                  <input type="email" className="form-control" id="email" placeholder="Email"  name="email"  value={this.state.email} onChange={this.handleChangeAll} required/>
                  
                </div>
                <div className="form-group col-md-6">
                  
                  <input type="text" className="form-control" id="mobile" placeholder="Mobile No"  name="mobile"  value={this.state.mobile} onChange={this.handleChangeAll}  required/>
                  
                </div>

                 <div className="form-group col-md-6">
                  
                  <input type="date" className="form-control" id="dob" placeholder="DOB"  name="dob"  value={this.state.dob} onChange={this.handleChangeAll}  required/>
                  
                </div>           
          
            
      </div>

                   
    <button style={{width:100, backgroundColor:'#670fd0',marginTop:10, marginLeft:10}}>
            <text style={{marginright:10}}>Registration</text>
      </button>
      

</div>
</form>

</div>

   
</div>

            </div>
        )
    }
}

export default Student;
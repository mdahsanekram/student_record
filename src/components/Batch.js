import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './CSS/style.css';
import Menu from './Menu';
import axios from 'axios';
import Student from './Student';

class Batch extends Component{

    constructor(props){
		super(props);

		this.state = {
      
      data : [],
				
		}

		
  }
  

  componentDidMount =()=>
  {
    axios.get('http://localhost:3002/getData')
    .then( (response)=> 
    {
      console.log(response.data);
      this.setState({data : response.data});
      console.log("Data wala ",this.state.data);
     
    })

    .catch(function (error) {
      console.log(error);
    });
  }

    render(){
        return(
            <div>

        <div>
            <Menu />
          </div>

          <div>

<div className="Parent_div">

<div  className="">


<table class="table">
  
  <thead>
    <tr>
      <th scope="col">Id </th>
      <th scope="col">Name</th>
      <th scope="col">Facalty Name</th>
      <th scope="col">Start Data</th>
      <th scope="col">End Data </th>
      <th scope="col">Select Batch</th>

    </tr>
  </thead>
  <tbody>
    {

        this.state.data.map((user,index)=>(

            <tr key={user.b_id}>
               <td>{user.b_id}</td>
                <td>{user.bname}</td>
                <td>{user.facaltyName}</td>
                <td>{user.Start_date}</td>
                <td>{user.End_date}</td>
                <td><Link to={{ 
                  pathname: "/Student",
                  editProps:{editData: user.b_id}
              // state: data_you_need_to_pass 
              }} style={{ textDecoration: 'none',color:'Orange' }} >Select Batch</Link></td>
               
            </tr>
        ))

    }
  </tbody>
</table>



</div>


</div>
</div>

          </div>
        )
    }
}
export default Batch;
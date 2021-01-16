import React, { Component } from 'react';
// import axios from 'axios';
import './CSS/style.css';
import Menu from './Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './CSS/style.css';
import axios from 'axios';

class ShowData extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {

            
            data : []
        }
    }



    componentDidMount()
    {
      axios.get('http://localhost:3002/studentData')
      .then( (response)=> 
      {
        console.log(response.data);
        this.setState({data : response.data});
        console.log("Show Data ",this.state.data);
       
      })
  
      .catch(function (error) {
        console.log(error);
      });




    }



    render()
    {


        return (

                <div>

                <Menu />

                <h3 className="text-center">All Register Students </h3>
<div className="scrollTable">
<table class="table">
 
  <thead>
    <tr>
      <th scope="col">Id </th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Mobile</th>
      <th scope="col">Gender</th>
      <th scope="col">B_Id </th>
     

    </tr>
  </thead>
  <tbody>
    {

        this.state.data.map((user,index)=>(




            <tr key={user.S_ID}>
               <td>{user.S_ID}</td>
                <td>{user.S_NAME}</td>
                <td>{user.gender}</td>
                <td>{user.DOB}</td>
                <td>{user.MOB}</td>
                <td>{user.batchID}</td>
                

            </tr>
        ))

    }
  </tbody>
</table>

</div>

                </div>

        )





    }
}


export default ShowData;
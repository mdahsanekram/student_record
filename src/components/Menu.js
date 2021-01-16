import React from 'react';
import {Link} from 'react-router-dom';
import './CSS/MenuStyle.css';

const Menu = () =>{

    return (
        <div className="Menustyle">
            <ul>
                {/* <li><Link to="/" style={{ textDecoration: 'none' ,color:'white'}} >Students</Link></li> */}
                <li><Link to="/" style={{ textDecoration: 'none',color:'white' }} >Batch</Link></li>
                <li><Link to="ShowData" style={{ textDecoration: 'none',color:'white' }} >ShowData </Link></li>
               
            </ul>
        </div>

    );
}

export default Menu;
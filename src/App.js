import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
// import { Navbar } from 'react-bootstrap';
import Batch from './components/Batch';
import ShowData from './components/ShowData';
import './App.css';

import {BrowserRouter,Switch ,Route } from 'react-router-dom';



function App() {
  return (

    <BrowserRouter>
    <div className="App">

    <Switch>
      
      <Route path="/" exact component={Batch} ></Route>
      <Route path="/ShowData" exact component={ShowData} ></Route>
      <Route path="/Student" exact component={Student}></Route>
      </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;


import React from "react";
import './App.css';
import {Register} from "./Register";
import {Contact} from "./Contact";
import {Login} from "./Login";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Login/>} exact />
            <Route path='/Contact' element={<Contact/>} exact/>
            <Route path='/Register' element={<Register/>} exact/>
        </Routes>
    </div>
  );
}

export default App;

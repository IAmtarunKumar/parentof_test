
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';



function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    // Fetch user data from the Node.js API
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



  return <div >
    
    <div id='main'>
   <form action="">
    <h1>Student Profile</h1>
    <label htmlFor="name"></label>
    <input id='name' type="text" />
    <br /> <br />
    <label htmlFor="class"></label>
    <input id='class' type="text" />
    <br /> <br />
    <label htmlFor="marks"></label>
    <input id='marks' type="text" />

    <br /><br />
    <button id='submit'>Submit</button>

   </form>
   </div>
   </div>

}

export default App;

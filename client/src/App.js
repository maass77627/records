
  import './App.css';
  import React from 'react';
  import Signup from './Signup';
  import RecordContainer from './RecordContainer';
  import UserRecords from "./UserRecords"
  import Login from './Login';
  import { useState } from "react";
  import { useEffect } from "react";
  import NewRecord from './NewRecord';
  
  
  

function App() {
    const [records, setRecords] = useState("")
    const [user, setUser] = useState(null);
    const [appLoaded, setAppLoaded] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [userrecords, setUserrecords] = useState("")
    const [showForm, setShowForm] = useState(false)

   useEffect(() => {
    fetch("/records", {
      mode: 'no-cors'
  })
    .then((response) => response.json())
    .then((json) => { 
      setRecords(json)
      setAppLoaded(true)
  })
      }, [records]) 

      

      function deleteRecord(id) {
        
       const updatedRecords = records.filter(record => record.id !== id)
       setRecords(updatedRecords)
        
      }


      useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((user) => setUser(user));
          }
        });
      }, []);

      function handleClick() {
        setToggle(!toggle)
      }


      function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => logOut())
      }

      function logOut() {
        setUser(null)
      }

      function handleForm() {
        setShowForm(!showForm)
      }

      function showColl() {
       fetch(`/users/${user.id}/records`, {
          mode: 'no-cors'
      })
        .then((response) => response.json())
        .then((json) => { 
           setUserrecords(json)
      })
      }

  return (
    <div className="App">
      <header className="App-header">
          <img id="headimage" src="VINYLHead.png" alt="record"></img>
          {user ? <h2 id="wel">Welcome, {user.username.toUpperCase()}!</h2> : <Login onLogin={setUser} />}
          {user ? <button onClick={(e) => showColl()}>My Collection</button> : null}
      </header>
    
        {/* <span>click records for options</span><br></br> */}
        <button onClick={handleClick}>Signup</button>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleForm}>Add Record</button>
       
       {showForm ? <NewRecord></NewRecord> : null}
       {toggle ? <Signup></Signup> : null}
       {userrecords ? <UserRecords showColl={showColl}  userrecords={userrecords}></UserRecords> : null} 
       {appLoaded ? <RecordContainer showColl={showColl} deleteRecord={deleteRecord} userrecords={userrecords} records={records} user={user}></RecordContainer> : null}

    </div>
  );
}

export default App;

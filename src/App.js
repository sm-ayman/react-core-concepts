import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [students , setStudents] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setStudents(data))
  }, [])
  // const students = ['Ayman', 'Jhankar', 'Bon', 'Daisy'];   1
  
  //  const students = [{name:'Ayman',id: '01'}, {name:'Jhankar',id: '02'}, {name:'Bon',id: '03'}];  //2
  
  return (
    <div classStudent="App"> 
      <MovieCounter></MovieCounter>
      
      {/* {
        students.map((stu => <Student name={stu}></Student>)) 1
      }  */}

      {
        students.map((stu => <Student name={stu.name} id={stu.id}></Student>))   //2
      }

      {/* <Student name="karim" id="0100"></Student>
      <Student name="Rahim" id="0102"></Student>  */}


      <header classStudent="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
    </div>
  );
}


function Student(props) {
  const studentStyle = {
    border: '2px solid purple',
    margin: '20px',
  }
  return <div style={studentStyle}>
    <h1>Hello, my name is {props.name}</h1>
    <h3>Id: {props.id}</h3>
  </div>
}


// function movie counter  
function MovieCounter() {
  // const count= 0;  
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add movie</button>
      <h5>Number of movies: {count} </h5>
      <movieDisplay></movieDisplay>
    </div>
  )
}

// function movie display
function movieDisplay() {
  return (
    <div>
      <h4>Movies I have acted: </h4>
    </div>
  )
}

export default App;

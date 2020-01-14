import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [name,setName]=useState('');
  const [userList,setUserList]=useState([]);
 



  const addToChat=(e)=>{
    e.preventDefault();

    console.log(`name is ${name}`)

    setUserList(
      [...userList, name]
    )
  }


  return (
    <div className="App">
    
    <p>Welcome to the Chat</p>
    <form onSubmit={addToChat}>
      <input type='text' placeholder="name" 
      name='name' value={name} onChange={event=>setName(event.target.value)}/>
      <button >clickMe</button>
     
      
    </form>
    {/* {userList.map(i=>(
        <div>
          <p>{i.id} {i.value}</p>
          
        </div>
      ))} */}

    </div>
  );
}

export default App;

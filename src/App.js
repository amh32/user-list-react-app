import './App.css';
import React, {useState} from 'react';

import AddUser from './components/AddUser/AddUser';
//import User from './components/User/User';
import UserList from './components/UserList/UserList';


function App() {
  //const testuser = {id: 'user0', name: 'testname', age: 'testage'};
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    const newId = 'user' + users.length;
    const newUser = { id: newId, name: name, age: age}
    const newList = [...users, newUser];
    setUsers(newList);
  }

  return (
    <div className="App">
      <header className="App-header">User List App</header>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;

import './UserList.css'
import React from 'react';
import User from '../User/User';
import Card from '../UI/Card/Card'

const UserList = props => {
    const users = props.users;

    const userList = users.map(user => (
        <li key={user.id}>
            <User 
                id={user.id}
                name={user.name}
                age={user.age}
            />
        </li>
    ));

    return (
        <Card className='users'>
            <label> List: </label>
            <ul>{userList}</ul>
        </Card>
    );
}

export default UserList;
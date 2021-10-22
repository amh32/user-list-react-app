import './AddUser.css'
import React , {useState} from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button'

const AddUser = props => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const nameChangeHandler = event => {
        setUserName(event.target.value);
    }

    const ageChangeHandler = event => {
        setUserAge(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        props.onAddUser(userName, userAge);
        setUserName('');
        setUserAge('');
    }

    return (
        <Card className='input'>
            <form onSubmit={submitHandler}>
                <label> Name: </label>
                <input type='text' value={userName}
                    onChange={nameChangeHandler} />
                <label> Age: </label>
                <input type='text' value={userAge}
                    onChange={ageChangeHandler} />
                <Button> Ok </Button>
            </form>
        </Card>
    );
}

export default AddUser;
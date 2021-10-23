import './AddUser.css'
import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button'
import ErrorModal from '../UI/ErrorModal/ErrorModal';

const AddUser = props => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState()

    const submitHandler = event => {
        event.preventDefault();
        if (userName.trim().length === 0) setError({
            title: 'Invalid nam',
            message: 'Pleas doo rogjt name'
        });
        if (+userAge < 1) setError({
            title: 'Invalid age',
            message: 'Pleas doo rogjt age'
        });

        props.onAddUser(userName, userAge);
        setUserName('');
        setUserAge('');
    }

    const ageChangeHandler = event => {
        setUserAge(event.target.value);
    }

    const nameChangeHandler = event => {
        setUserName(event.target.value);
    }

    const ErrorHandler = event => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler}></ErrorModal>}
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
        </>
    );
}

export default AddUser;
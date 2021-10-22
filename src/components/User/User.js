import './User.css'

const User = props => {
    // const id = props.id;
    const name = props.name;
    const age = props.age;

    return (
        <div className='user-entry'>
            <label className='user-name'> Name: {name}</label>
            <label className='user-age'> Age: {age}</label>
        </div>
    );
}

export default User;
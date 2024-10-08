import React , {useState} from 'react';

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault ();
        console.log(email);
    }


    return (
        <div className='formContainer'>
        <form className='loginForm' onSubmit={handleSubmit}>
            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="youremail@gmail.com" id="email" name="email" />
            <label>Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder="*********" id="password" name="password" />
            <button type='submit'>Log In</button>
        </form>
        <button className='btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Sign Up</button>
        </div>
    )
}
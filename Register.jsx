import React , {useState} from 'react';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault ();
        console.log(email);
    }

    return (
        <div className='formContainer'>
        <form className='registerForm' onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type='text' name='name' id='name' placeholder='Full Name'  />
            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="youremail@gmail.com" id="email" name="email" />
            <label>Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder="*********" id="password" name="password" /> 
            <button type='submit'>Sign Up</button>
        </form>
        <button className='btn' onClick={() => props.onFormSwitch('login')}>Already have an accounnt? Log In</button>
        </div>
    )
}
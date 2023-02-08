import './styles/LoginForm.css'
import {useState} from 'react'
export function LoginForm(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    console.log(email)
    console.log(password)
    function onEmailChange(event){
        setEmail(event.target.value)
    }
    function onPassowrdChange(event){
        setPassword(event.target.value)
    }
    return (
    <form className='LoginForm'>
        <label>Email</label>
        <input type='email' name='email' onChange={onEmailChange} />
        <label>Contraseña</label>
        <input type='password' name='passowrd' onChange={onPassowrdChange} />
        <div className='LoginFormBottom'>
            <div className='RememberContainer'>
            <input type='checkbox' name='checkbox'/>
            <label>Recordarme</label>
            </div>
            <a href='/#'>Olvidaste la contraseña?</a>
        </div>
        <div>
            Usuario: {email}
            <br/>
            Password: {password}
        </div>
    </form>
)}
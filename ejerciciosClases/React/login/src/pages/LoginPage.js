import '../styles/LoginPage.css'
import LoginImg from '../Images/LoginImg.png'
import {useState} from 'react'
import {MostrarDatos} from '../components/MostrarDatos.js'

export function LoginPage(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [mostrar, setMostrar] = useState(false);
    
    const funcionCualquiera = (event) =>{
        event.preventDefault();
        setMostrar(true)
    }

    const emailOnChange = (event) => {
        setEmail(event.target.value)
    }

    const passwordOnChange = (event) => {
        setPassword(event.target.value)
    }
    console.log(email)
    console.log(password)
    return(
        <div className="LoginContainer">
            <img src={LoginImg} alt="Login" className='img'/>
            <form className='LoginForm' onSubmit={funcionCualquiera}>
            <label className='LoginTitle'>Iniciar sesión</label>
            <input type='email' name='email' placeholder='Email' className='LoginInput' onChange={emailOnChange}/>
            <input type='password' name='passowrd' placeholder='Contraseña' className='LoginInput' onChange={passwordOnChange}/>
            <button className='LoginButton' >Iniciar sesión</button>
            </form>
            <MostrarDatos mostrar={mostrar} email={email} password={password}/>
        </div>
    )
}
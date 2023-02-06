import './styles/LoginForm.css'

export function LoginForm(){
    return (
    <form className='LoginForm'>
        <label>Email</label>
        <input type='email' name='email'/>
        <label>Contraseña</label>
        <input type='password' name='passowrd'/>
        <div className='LoginFormBottom'>
            <div className='RememberContainer'>
            <input type='checkbox' name='checkbox'/>
            <label>Recordarme</label>
            </div>
            <a href='/#'>Olvidaste la contraseña?</a>
        </div>
    </form>
)}
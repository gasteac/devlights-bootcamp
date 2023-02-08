import '../styles/LoginPage.css'

export function MostrarDatos({email, password, mostrar}){
    return(
        <div className='MostrarDatos'>
            {mostrar && <div>
            <p>Usuario: {email}</p>
            <p>Contraseña: {password}</p>
            </div>
            }
        </div>
    )
}
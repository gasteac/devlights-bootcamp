import { Hero } from "../components/Hero";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { FormFooter } from "../components/FormFooter/FormFooter";
import { FormHeader } from "../components/FormHeader/FormHeader";

export function LoginPage(){
    return (
        <div className='flex w-full h-screen'>
            <div className='flex-1'>
                <Hero/>
            </div>
            <div className='flex-1 flex justify-center items-center flex-col'>
                <FormHeader subtitle='Bienvenido devuelta' title='Ingresa a tu cuenta'/>
                <LoginForm/>
                <FormFooter account='No tienes cuenta?' link='Registrate' page='/register'/>
            </div>
        </div>
    )
}
import { Hero } from "../components/Hero";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { FormFooter } from "../components/FormFooter/FormFooter";
import { FormHeader } from "../components/FormHeader/FormHeader";

export function RegisterPage(){
    return (
        <div className='flex w-full h-screen'>
            <div className='flex-1'>
                <Hero/>
            </div>
            <div className='flex-1 flex justify-center items-center flex-col'>
                <FormHeader subtitle='Crea tu usuario' title='Ingresa tus datos'/>
                <RegisterForm/> 
                <FormFooter account='Ya tienes cuenta?' link='Inicia Sesion' page='/login'/>
            </div>
        </div>
    )
}
import './RegisterPage.css'
import { Hero } from "../../components/Hero";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { FormFooter } from "../../components/FormFooter/FormFooter";
import { FormHeader } from "../../components/FormHeader/FormHeader";

export function RegisterPage(){
    return (
        <div className='RegisterPageContainer'>
            <div className='RegisterHeroContainer'>
                <Hero/>
            </div>
            <div className='RegisterFormContainer'>
                <FormHeader subtitle='Crea tu usuario' title='Ingresa tus datos'/>
                <RegisterForm/> 
                <FormFooter account='Ya tienes cuenta?' link='Inicia Sesion' page='/login'/>
            </div>
        </div>
    )
}
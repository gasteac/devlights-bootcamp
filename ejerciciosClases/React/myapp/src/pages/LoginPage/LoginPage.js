import { Hero } from "../../components/Hero";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { FormFooter } from "../../components/FormFooter/FormFooter";
import { FormHeader } from "../../components/FormHeader/FormHeader";

import './LoginPage.css'

export function LoginPage(){
    return (
        <div className='LoginPageContainer'>
            <div className='LoginHeroContainer'>
                <Hero/>
            </div>
            <div className='LoginFormContainer'>
                <FormHeader subtitle='Bienvenido devuelta' title='Ingresa a tu cuenta'/>
                <LoginForm/>
                <FormFooter account='No tienes cuenta?' link='Registrate' page='/register'/>
            </div>
        </div>
    )
}
import "./RegisterForm.css";
import { useState } from "react";
import { createUserService } from "../../services/users";
import { useNavigate } from "react-router-dom";

export function RegisterForm() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [lastName, setLastName] = useState();
  const [adress, setAdress] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onAdressChange(event) {
    setAdress(event.target.value);
  }

  function onLastNameChange(event) {
    setLastName(event.target.value);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }
  function onPassowrdChange(event) {
    setPassword(event.target.value);
  }
  function onPassowrd2Change(event) {
    setPassword2(event.target.value);
  }
  async function onFormSubmit(event) {
    event.preventDefault();
    if (email === undefined) {
        alert("Ingrese su email");
    } else if (password === undefined) {
        alert("Ingrese las contraseñas");
    } else if (password2 === undefined) {
        alert("Ingrese las contraseñas");
    } else if (password !== password2) { 
        alert("Las contraseñas no coinciden");
    } else {
        createUserService({name, email, lastName, adress, password})
        alert('Cuenta creada')
        navigate('/login')
    }
  }

  return (
    <form className="RegisterForm" onSubmit={onFormSubmit}>
      <label>Ingrese su nombre</label>
      <input name="name" onChange={onNameChange} />
      <label>Ingrese apellido</label>
      <input name="lastName" onChange={onLastNameChange} />
      <label>Ingrese su email</label>
      <input type="email" name="email" onChange={onEmailChange} />
      <label>Ingrese su dirección</label>
      <input name="adress" onChange={onAdressChange} />
      <label>Ingrese su contraseña</label>
      <input type="password" name="passowrd" onChange={onPassowrdChange} />
      <label>Vuelva a ingresar su contraseña</label>
      <input type="password" name="passowrd2" onChange={onPassowrd2Change} />
      <div className="FormBottom">
        <div className="RememberContainer">
          <input type="checkbox" name="checkbox" />
          <label>No soy un robot🤖... o si...</label>
        </div>
      </div>
      <button className=' bg-green-600 p-3 rounded-lg text-white hover:bg-green-400' type='submit'>Crear cuenta</button>
    </form>
  );
}
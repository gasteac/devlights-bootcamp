import "./LoginForm.css";
import { useState } from "react";
import { LoginButton } from "../LoginButton";
import { GoogleLoginButton } from "../GoogleLoginButton";
import { loginUser } from "../../services/users";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function onEmailChange(event) {
    setEmail(event.target.value);
  }
  function onPassowrdChange(event) {
    setPassword(event.target.value);
  }
  async function onFormSubmit(event) {
    event.preventDefault();
    try {
      await loginUser({ email, password });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    const loggedIn = await loginUser({ email, password })
    console.log(loggedIn)
  }
  return (
    <form className="LoginForm" onSubmit={onFormSubmit}>
      <label>Email</label>
      <input type="email" name="email" onChange={onEmailChange} />
      <label>Contraseña</label>
      <input type="password" name="passowrd" onChange={onPassowrdChange} />
      <div className="LoginFormBottom">
        <div className="RememberContainer">
          <input type="checkbox" name="checkbox" />
          <label>Recordarme</label>
        </div>
        <a href="/#">Olvidaste la contraseña?</a>
      </div>
      <LoginButton/>
      <GoogleLoginButton />
    </form>
  );
}

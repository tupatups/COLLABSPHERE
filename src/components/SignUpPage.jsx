import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../style/signUpStyle.module.css";
import { useState } from "react";
import app from "../firebase"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

const auth = getAuth(app)


export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential
        console.log(user)
        navigate("/dashboard");
      }) 
  };
  function handleEmailChange(event){
    setEmail(event.target.value)
  }

  function handlePasswordChange(event){
    setPassword(event.target.value)
  }
  
  return (
    <>
      <div class={style.container}>
        <h1 class={style.title}>CollabSphere</h1>
        <p class={style.subTitle}>Navigate the workflow seas with ease!</p>
        <form class={style.formContainer} onSubmit={handleLogin}>
          <div>
            <div>
              <div class={style.formContentContainer}>
                <p class={style.welcome}>Welcome!</p>
                <div class={style.usernameDiv}>
                  <label>Enter your username</label>
                  <input placeholder="Username" id="username" type="text" onChange={handleEmailChange}/>
                </div>
                <div class={style.passwordDiv}>
                  <label>Set password</label>
                  <input placeholder="••••••••" id="password" type="password" onChange={handlePasswordChange}/>
                </div>
                <button class={style.loginSignUpButton} onClick={handleLogin}>Create Account</button>
                <p class={style.noAccount}>
                  Already have an account? <Link to="/">Sign in</Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

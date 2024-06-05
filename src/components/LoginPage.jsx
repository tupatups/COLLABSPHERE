import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../style/signUpStyle.module.css";
import app from "../firebase.js"
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth"

const auth = getAuth();


export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const handleLogin = (event) => {
    event.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential
      console.log("Logged in", user)
      
      navigate("/dashboard");
      
    })
    .catch((error) => {
      console.log("Error: ", error)
    })
    
  };

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

 
  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>CollabSphere</h1>
        <p className={style.subTitle}>Navigate the workflow seas with ease!</p>
        <form className={style.formContainer} onSubmit={handleLogin}>
          <div>
            <div>
              <div className={style.formContentContainer}>
                <p className={style.welcome}>Welcome back!</p>
                <div className={style.usernameDiv}>
                  <label>Username</label>
                  <input placeholder="Username" id="username" type="text" onChange={handleEmailChange}/>
                </div>
                <div className={style.passwordDiv}>
                  <label>Password</label>
                  <input placeholder="••••••••" id="password" type="password" onChange={handlePasswordChange}/>
                </div>
                <button className={style.loginSignUpButton} onClick={handleLogin}>Login</button>
                <p className={style.noAccount}>
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

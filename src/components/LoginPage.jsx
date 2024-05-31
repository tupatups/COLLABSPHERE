import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../style/signUpStyle.module.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
  };

  function handleNavigate() {
    navigate("/dashboard");
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
                <p class={style.welcome}>Welcome back!</p>
                <div class={style.usernameDiv}>
                  <label>Username</label>
                  <input placeholder="Username" id="username" type="text" />
                </div>
                <div class={style.passwordDiv}>
                  <label>Password</label>
                  <input placeholder="••••••••" id="password" type="password" />
                </div>
                <button class={style.loginSignUpButton} onClick={handleNavigate}>Login</button>
                <p class={style.noAccount}>
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

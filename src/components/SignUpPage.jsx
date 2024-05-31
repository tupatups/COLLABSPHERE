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
                <p class={style.welcome}>Welcome!</p>
                <div class={style.usernameDiv}>
                  <label>Enter your username</label>
                  <input placeholder="Username" id="username" type="text" />
                </div>
                <div class={style.passwordDiv}>
                  <label>Set password</label>
                  <input placeholder="••••••••" id="password" type="password" />
                </div>
                <button class={style.loginSignUpButton} onClick={handleNavigate}>Create Account</button>
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

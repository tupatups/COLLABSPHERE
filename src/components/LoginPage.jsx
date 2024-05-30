import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import a from "../style/loginStyle.module.css";

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
      <div class={a.container}>
        <h1 class={a.title}>CollabSphere</h1>
        <p class={a.subTitle}>Navigate the workflow seas with ease!</p>
        <form class={a.formContainer} onSubmit={handleLogin}>
          <div>
            <div>
              <div class={a.formContentContainer}>
                <p class={a.welcome}>Welcome back!</p>
                <div class={a.usernameDiv}>
                  <label>Your username</label>
                  <input placeholder="Username" id="username" type="text" />
                </div>
                <div class={a.passwordDiv}>
                  <label>Password</label>
                  <input placeholder="••••••••" id="password" type="password" />
                </div>

                <p class={a.noAccount}>
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

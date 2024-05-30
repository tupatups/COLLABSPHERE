import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import a from "../style/signUpStyle.module.css";

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
                <p class={a.welcome}>Welcome!</p>
                <div class={a.usernameDiv}>
                  <label>Enter your username</label>
                  <input placeholder="Username" id="username" type="text" />
                </div>
                <div class={a.passwordDiv}>
                  <label>Set password</label>
                  <input placeholder="••••••••" id="password" type="password" />
                </div>

                <p class={a.noAccount}>
                  Already have an account? <Link to="/signup">Sign in</Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

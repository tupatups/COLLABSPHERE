import style from "../style/header.module.css";

export default function Header() {
  return (
    <div class={style.header}>
      <div class={style.titleLogo}>
        <h2 class={style.appTitle}>CollabSphere</h2>
      </div>
      <nav>
        <ul>
            <li></li>
        </ul>
      </nav>
    </div>
  );
}

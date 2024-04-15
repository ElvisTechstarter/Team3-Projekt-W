import styles from "./LoginButtonPopup.module.css";

function LoginButtonPopup({ setShowTodo }) {
  return <div className={styles.container} onClick={setShowTodo}></div>;
}

export default LoginButtonPopup;

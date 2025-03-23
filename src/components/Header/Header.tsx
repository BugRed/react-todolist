import styles from "./Header.module.css";
import rocket from "../../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
       <img src={rocket} alt=""  className={styles.rocket}/>
       <h1 className={styles.to}>to<strong className={styles.do}>do</strong></h1> 
      </div>
    </header>
  );
}

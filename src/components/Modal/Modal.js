import styles from "./Modal.module.css";
import { CROSS, CIRCLE } from "../../constants";
import Button from "../Button";

export default function Modal({ onClick, onChange }) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2 className={styles.header}>Enter your names</h2>
        <form className={styles.form}>
          <input
            className={styles.input}
            placeholder="Cross team name"
            name={CROSS}
            onChange={onChange}
            required
          />
          <input
            className={styles.input}
            placeholder="Circle team name"
            name={CIRCLE}
            onChange={onChange}
            required
          />
        </form>
        <Button onClick={onClick}>Let's play!</Button>
      </div>
    </div>
  );
}

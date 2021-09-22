import styles from "./Modal.module.css";
import { CROSS, CIRCLE } from "../../constants";

export default function Modal({ onClick, onChange }) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2>Enter your name</h2>
        <form>
          <input
            placeholder="Cross team name"
            name={CROSS}
            onChange={onChange}
            required
          />
          <input
            placeholder="Circle team name"
            name={CIRCLE}
            onChange={onChange}
            required
          />
        </form>
        <button type="button" onClick={onClick}>
          Let's play!
        </button>
      </div>
    </div>
  );
}

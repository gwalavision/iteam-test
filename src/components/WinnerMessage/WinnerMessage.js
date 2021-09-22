import styles from "./WinnerMessage.module.css";
import Button from "../Button";
export default function WinnerMessage({ winner, onClick }) {
  return (
    <div className={styles.container}>
      {winner ? (
        <strong className={styles.info}>The winner is {winner}!</strong>
      ) : (
        <strong className={styles.info}>It's a draw!</strong>
      )}
      <Button onClick={onClick}>Restart</Button>
    </div>
  );
}

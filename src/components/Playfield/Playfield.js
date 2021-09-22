import Cell from "../Cell";
import WinningLine from "../WinningLine";
import styles from "./Playfield.module.css";

export default function Playfield({ onClick, cellValue, winArray }) {
  return (
    <div className={styles.playfield}>
      <Cell value={0} onClick={onClick} cellValue={cellValue} />
      <Cell value={1} onClick={onClick} cellValue={cellValue} />
      <Cell value={2} onClick={onClick} cellValue={cellValue} />
      <Cell value={3} onClick={onClick} cellValue={cellValue} />
      <Cell value={4} onClick={onClick} cellValue={cellValue} />
      <Cell value={5} onClick={onClick} cellValue={cellValue} />
      <Cell value={6} onClick={onClick} cellValue={cellValue} />
      <Cell value={7} onClick={onClick} cellValue={cellValue} />
      <Cell value={8} onClick={onClick} cellValue={cellValue} />
      {winArray && <WinningLine winArray={winArray} />}
    </div>
  );
}

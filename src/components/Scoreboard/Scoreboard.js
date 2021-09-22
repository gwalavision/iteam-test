import React from "react";
import styles from "./Scoreboard.module.css";
import { CROSS, CIRCLE } from "../../constants";

export default function Scoreboard({ nameX, nameO, scoreX, scoreO, nextMove }) {
  const activePlayer = [styles.player, styles.active].join(" ");
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Score</h2>
      <ul className={styles.list}>
        <li className={nextMove === CROSS ? activePlayer : styles.player}>
          {nameX}: {scoreX}
        </li>
        <li className={nextMove === CIRCLE ? activePlayer : styles.player}>
          {nameO}: {scoreO}
        </li>
      </ul>
    </div>
  );
}

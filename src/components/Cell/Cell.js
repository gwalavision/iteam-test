import React from "react";
import styles from "./Cell.module.css";

export default function Cell({ value, onClick, cellValue }) {
  return (
    <button
      type="button"
      className={styles.cell}
      value={value}
      onClick={(e) => onClick(e)}
    >
      {cellValue[value]}
    </button>
  );
}

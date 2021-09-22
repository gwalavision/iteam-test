import React from "react";
import styles from "./WinningLine.module.css";

export default function WinningLine({ winArray }) {
  if (!winArray) {
    return;
  }
  let style;
  switch (winArray.join("")) {
    case "012":
      style = {
        top: "15%",
      };
      break;

    case "678":
      style = {
        bottom: "15%",
      };
      break;

    case "036":
      style = {
        left: "-25%",
        transform: "rotate(90deg)",
      };
      break;

    case "258":
      style = {
        left: "41%",
        transform: "rotate(90deg)",
      };
      break;

    case "246":
      style = {
        left: "7.5%",
        transform: "rotate(135deg)",
      };
      break;

    case "147":
      style = {
        right: "7.5%",
        transform: "rotate(90deg)",
      };
      break;

    case "048":
      style = {
        transform: "rotate(45deg)",
      };
      break;

    default:
      break;
  }
  return <div style={style} className={styles.line}></div>;
}

import React, { useState } from "react";
import styles from "./App.module.css";
import Modal from "./components/Modal/Modal";
import Playfield from "./components/Playfield";
import Scoreboard from "./components/Scoreboard";
import WinnerMessage from "./components/WinnerMessage";

import { CROSS, CIRCLE, WINNING_LINES } from "./constants";

export default function App() {
  const [clickedCells, setClickedCells] = useState(
    JSON.parse(JSON.stringify(WINNING_LINES))
  );
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [playerMove, setPlayerMove] = useState("");
  const [nameX, setNameX] = useState("");
  const [nameO, setNameO] = useState("");
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [winner, setWinner] = useState("");
  const [movesCount, setMovesCount] = useState(0);
  const [cellValue, setCellValue] = useState(Array(9).fill(""));

  const changeCell = (value, figure) => {
    const result = clickedCells.map((e) => {
      const index = e.indexOf(Number(value));
      if (index !== -1) {
        e[index] = figure;
      }
      return e;
    });
    setClickedCells(result);
  };

  const defineWinner = () => {
    clickedCells.forEach((e) => {
      if (e.join("") === "XXX") {
        setScoreX(scoreX + 1);
        setWinner(nameX);
        return;
      } else if (e.join("") === "OOO") {
        setScoreO(scoreO + 1);
        setWinner(nameO);
      }
    });
  };

  const clickOnCell = (e) => {
    if (e.target.innerHTML === "X" || e.target.innerHTML === "O" || winner) {
      return;
    }
    const { value } = e.target;

    changeCell(value, playerMove);
    setMovesCount(movesCount + 1);
    setCellValue(
      cellValue.map((e, i) => {
        if (i === Number(value)) {
          return playerMove;
        }
        return e;
      })
    );
    defineWinner();
    setPlayerMove(playerMove === CROSS ? CIRCLE : CROSS);
  };

  const setName = (e) => {
    const { name, value } = e.target;
    name === CROSS ? setNameX(value) : setNameO(value);
  };

  const makeFirstMove = () => {
    const dice = Math.round(Math.random());
    dice === 1 ? setPlayerMove(CROSS) : setPlayerMove(CIRCLE);
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const onCloseModal = () => {
    makeFirstMove();
    toggleModal();
  };

  const restartTheGame = (e) => {
    setClickedCells(JSON.parse(JSON.stringify(WINNING_LINES)));
    setMovesCount(0);
    setWinner("");
    setCellValue(Array(9).fill(""));
    makeFirstMove();
  };

  return (
    <>
      {modalIsOpen ? (
        <Modal onClick={onCloseModal} onChange={setName} />
      ) : (
        <div>
          <div className={styles.container}>
            <Playfield onClick={clickOnCell} cellValue={cellValue} />
            <Scoreboard
              nameX={nameX}
              nameO={nameO}
              scoreX={scoreX}
              scoreO={scoreO}
            />
          </div>
          {(winner || movesCount === 9) && (
            <WinnerMessage winner={winner} onClick={restartTheGame} />
          )}
        </div>
      )}
    </>
  );
}

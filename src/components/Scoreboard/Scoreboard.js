import React from "react";

export default function Scoreboard({ nameX, nameO, scoreX, scoreO }) {
  return (
    <div>
      <h2>Score</h2>
      <ul>
        <li>
          {nameX}: {scoreX}
        </li>
        <li>
          {nameO}: {scoreO}
        </li>
      </ul>
    </div>
  );
}

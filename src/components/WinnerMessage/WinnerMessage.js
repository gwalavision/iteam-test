export default function WinnerMessage({ winner, onClick }) {
  return (
    <div>
      {winner ? (
        <strong>The winner is {winner}!</strong>
      ) : (
        <strong>It's a draw!</strong>
      )}
      <button type="button" onClick={onClick}>
        Restart
      </button>
    </div>
  );
}

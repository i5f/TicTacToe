// instead of showing X won or O won, it would be better to show
// the winner's name directly but taking that info from <Player />
// component and putting it inside of this component would be
// unnecessarily hard and since we're updating the player names at
// every keystroke and if we put it into the <App /> component as
// it is, it will reload the whole component at every keystroke and
// this approach wouldn't be optimal in terms of performance. 
// Although we still gonna keep the track of that state in the <App />
// component, we will instead update the state when the user saves it.

function GameOver({ winner, onRestart }) {
  return <div id="game-over">
    <h2>Game Over!</h2>
    {winner ? <p>{winner} won!</p> : <p>It&apos;s a draw!</p>}
    <p><button onClick={onRestart}>Rematch!</button></p>
  </div>
}

export default GameOver;
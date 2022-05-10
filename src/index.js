class Board extends React.Component {
  renderSqare(i) {
   return <Sqare value={i} />; 
  }
  render(){
   const status = 'Nxt player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board.row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board.row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
class Sqare extends React.Component {
  constructor(props) {
   super(props);
    this.state = {
      value: null,
    };
  }
 render() {
  return(
    <button 
      className="sqare" 
      onClick={() => this.setState({value: 'X'})}
    >
      {this.state.value}
    </button>
    );
 }
}
class Game extends React.Component {
  render (){
   return(
    <div className="game">
     <div className="game-board">
      <Board />
     </div>
     <div className="game-info">
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
     </div>
    </div>
   )
  }
}
// =======================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

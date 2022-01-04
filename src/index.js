import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import TopBar from "./components/topbar/TopBar";

function Square(props) {
    return (
      <button className={props.className} onClick={props.onClick}>
        {props.value}
      </button>
    );
}


class Board extends React.Component {
  renderSquare(i) {
    let className = 'square';
    if (!!this.props.winners && this.props.winners.indexOf(i) > -1) {
      className += ' highlighted';
    };
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        className={className}
    />);
  }

  render() {
    let board_size = 3;
    let squares = [];
    for (let i=0; i<board_size; i++) {
     let row = [];
     for (let cnt=0; cnt<3; cnt++) {
       row.push(this.renderSquare(i * board_size + cnt));
     }
     squares.push(<div key={i} className="board-row">{row}</div>);
    }
    return squares;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        move: null,
      }],
      xIsNext: true,
      stepNumber: 0,
      isReversed: false,
      isDraw: false,
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  toggleOrder() {
    this.setState({
      isReversed: !this.state.isReversed
    })
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const results = calculateWinner(current.squares);
    let winner = null;
    let winning_row = null;
    if (results) {
      winner = results['winner'];
      winning_row = results['winning_row'];
    }
    if (squares[i] || winner) {
      return;
    }
    if (squares[i]) {
      this.setState({draw: true});
    }
    const row = Math.ceil((i + 1) / 3);
    const col = i % 3 + 1;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        move: col + ', ' + row,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const results = calculateWinner(current.squares);
    const draw = this.state.isDraw;
    let winner = null;
    let winning_row = null;
    if (results) {
      winner = results['winner'];
      winning_row = results['line'];
    }
    if (results) {
      winner = calculateWinner(current.squares)['winner'];
    }
    const reversed = this.state.isReversed;
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else if (draw) {
      status = 'Draw!'
    }
     else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      let loc;
      if (step.move) {
        loc = 'Loc: ' + step.move
      }
      let active;
      if (this.state.stepNumber === move) {
        active = 'active';
      }

      return (
        <li key={move}>
          <button className={active} onClick={() => this.jumpTo(move)}>{desc}</button>
          &nbsp; {loc}
        </li>
      );
    });

    if (reversed) {
      moves.reverse();
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => { this.handleClick(i) }}
            winners={winning_row}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
          <button onClick={() => this.toggleOrder()}>Re-order</button>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/*ReactDOM.render(
  <Game />,
  document.getElementById('root')
);*/

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      let winning_results = {};
      winning_results['winner'] = squares[a];
      winning_results['line'] = lines[i];
      return winning_results;
    }
  }
  return null;
}

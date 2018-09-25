import React, { Component } from "react";
import Square from "./Square";

class Board extends Component {
  renderSquare(i){
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>
  }
  render() {
    const matrixSize = Math.sqrt(this.props.squares.length); // Lấy kích cỡ của ma trận bằng props gửi từ App qua
    const rows = Array(matrixSize).fill(null); // Tạo rows là một Array để tiện sử dụng hàm map()
    const cols = rows; // Ma trận vuông nên cols = rows
    const board = rows.map((row, i) => {
      const squares = cols.map((col, j) => {
        const squareKey = i * matrixSize + j;
        return <span key={squareKey}>{this.renderSquare(squareKey)}</span>; // Chúng ta đang sử dụng vòng lặp trong reactJS nên phải có key cho mỗi phần tử (https://facebook.github.io/react/docs/lists-and-keys.html)
      });
      return <div className="board-row" key={i}>{squares}</div> // Tương tự như trên
    });
    return (
      <div>
        <div>Board</div>
        <div>{board}</div>
      </div>
    );
  }
}

export default Board;

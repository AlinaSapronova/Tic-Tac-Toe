const area = document.querySelector('.tictactoe');
const btn = document.querySelector('.btn');
const firstPlayer = document.querySelector('.firstPlayer')
const player1 = document.querySelector('.player1')
const secondPlayer = document.querySelector('.secondPlayer')
const player2 = document.querySelector('.player2')
let start = 0;
let board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]




///////////////////////////////////////////////////////first player
firstPlayer.addEventListener('keypress', (e) => {
if(e.key === 'Enter') {
player1.innerHTML = firstPlayer.value;
}
})


/////////second player
secondPlayer.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
    player2.innerHTML = secondPlayer.value;
    }
    })


///////////////////////////////////////////////////////////


area.addEventListener('click', startMove);
function startMove(e) {
    if(e.target.innerHTML) return;
    if(e.target.className = 'block') {
        //console.log(e.target)
        start % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        start ++;
        checking();
    }
}
////////////////////////////////////////////////////
///row
function getRow(board, row) {
    let arr = [];
    let currentRow = board[row];
    for (let i = 0; i < currentRow.length; i++) {
      let play = currentRow[i];
      arr.push(play);
    }
    return arr;
  }
  
  //column
  function getColumn(board, col) {
    let arr = [];
    for (let i = 0; i < board.length; i++) {
      let play = board[i][col];
      arr.push(play);
    }
    return arr;
  }
  
  //diagonal
  function getDiagonal(board, diagonal) {
    let arr = [];
    if (!diagonal) {
      for (let i = 0; i < board.length; i++) {
        let play = board[i][i];
        arr.push(play);
      }
    } else {
      for (let i = 2, j = 0; i > -1; i--, j++) {
        let play = board[i][j];
        arr.push(play);
      }
    }
    return arr;
  }
  ////////////////////////


function checking() {
    const ceil = document.getElementsByClassName('block');
    //console.log(blocks);
    const newArray = [
        [0,1,2],//row
        [3,4,5],
        [6,7,8],
        [0,3,6],//column
        [1,4,7], 
        [2,5,8],
        [0,4,8],//diagonal
        [2,4,6]
    ];
    for(let i = 0; i < newArray.length; i++) {
        if(ceil[newArray[i][0]].innerHTML == 'X' && ceil[newArray[i][1]].innerHTML == 'X' && ceil[newArray[i][2]].innerHTML == 'X')
         {
           return  Swal.fire({
            title: 'Player "X" is WINNER!!!',
            imageUrl: 'https://img.freepik.com/free-photo/colorful-fireworks-celebration-night-sky-background_36049-316.jpg?size=626&ext=jpg&uid=R72096366&ga=GA1.2.859751383.1653581502',
            imageWidth: 500,
            imageHeight: 300,
          })

        }  
        else if(ceil[newArray[i][0]].innerHTML == 'O' && ceil[newArray[i][1]].innerHTML == 'O' && ceil[newArray[i][2]].innerHTML == 'O') {
           return Swal.fire({
            title: 'Player "O" is WINNER!!!',
            imageUrl: 'https://img.freepik.com/free-photo/colorful-fireworks-celebration-night-sky-background_36049-316.jpg?size=626&ext=jpg&uid=R72096366&ga=GA1.2.859751383.1653581502',
            imageWidth: 500,
            imageHeight: 300,
          })
           
        }

        else if(start > 8) {
          return Swal.fire({
            title: 'D-R-A-W!!!!!!!',
            imageUrl: '  https://img.freepik.com/free-photo/friends-greetings-sign-disagreement-two-male-hands-competion-arm-wrestling-isolated-blue-studio-background-concept-standoff-support-friendship-business-community-strained-relations_155003-36361.jpg?size=626&ext=jpg&uid=R72096366&ga=GA1.2.859751383.1653581502',
            imageWidth: 500,
            imageHeight: 300,
          })
        }         
    } 
}


btn.addEventListener('click', () => {
   location.reload();
    })









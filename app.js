const area = document.querySelector('.tictactoe');
let start = 0;
let result = "";

area.addEventListener('click', startMove)
function startMove(e) {
    if(e.target.className = 'block') {
        //console.log(e.target)
        start % 2 === 0 ? e.target.innerHTML = 'X' : e.target. innerHTML = '0';
        start ++
         checking()
    }
}


function checking() {
    const blocks = document.getElementsByClassName('block');
    //console.log(blocks);
    const arrays = [
        [0,1,2],//row
        [3,4,5],
        [6,7,8],
        [0,3,6],//column
        [1,4,7], 
        [2,5,8],
        [0,4,8],//diagonal
        [2,4,6]
    ];
    for(let i = 0; i < arrays.length; i++) {
        if(blocks[arrays[i][0]].innerHTML == 'X' && blocks[arrays[i][1]].innerHTML == 'X' && blocks[arrays[i][2]].innerHTML == 'X') {
            result = 'X';
            winner(result)
        } 
        else if(blocks[arrays[i][0]].innerHTML == '0' && blocks[arrays[i][1]].innerHTML == '0' && blocks[arrays[i][2]].innerHTML == '0') {
            result = '0';
            winner(result)
        }
    }
}

function winner() {
    console.log(winner)
}
const area = document.querySelector('.tictactoe');
const btn = document.querySelector('.btn');
const playBtn = document.querySelector('.playBtn');
let start = 0;

playBtn.addEventListener('click', choose);
function choose(e) {
    e.preventDefault();
    

}






area.addEventListener('click', startMove)
function startMove(e) {
    if(e.target.className = 'block') {
        //console.log(e.target)
        start % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
        start ++;
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
           return alert('You WINER!!!')
        } 
        else if(blocks[arrays[i][0]].innerHTML == '0' && blocks[arrays[i][1]].innerHTML == '0' && blocks[arrays[i][2]].innerHTML == '0') {
           return alert('You WINER!!!')
        }
        else if(start > 7) {
          return  alert('DRAW');
        }
    }
}




//function with random number (0,8)

function randomName() {
let number = Math.floor(Math.random() * 8)
return number
//console.log(number)
}
randomName()

function currentEmpty() {
    
}



// need another f to check if the cell current empty
//if it empty then computer have to mark this
//if it not emty the run random number again








btn.addEventListener('click', () => {
    location.reload();
})
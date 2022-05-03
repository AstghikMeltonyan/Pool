const pushBtn = document.querySelector('.push')
const pullBtn = document.querySelector('.pull')
const poolArea = document.querySelector('.pool')
const total = document.querySelector('.total')

pushBtn.addEventListener('click', poolPush);
pullBtn.addEventListener('click', poolPull)


let water;
let v = 0;

function poolPush() {
  if ( v < 6 )  {
    water = document.createElement('div')
    water.classList.add('water')
    poolArea.appendChild(water);
    v++;
    total.textContent = 'Total:  [' + Number(v) + ']  liter';
    if ( v === 6 ) {
    total.textContent = 'The pool filled up ';
    total.style.color = 'red'
    }
  }
}


function poolPull() {
  total.style.color = 'darkblue'
  if (poolArea.firstChild !== null){
    poolArea.lastChild.remove();
    if ( v > 0 )  {
      v--;
      total.textContent = 'Total:  [' + Number(v) + ']  liter';
      if ( v === 0 ) {
      total.textContent = 'Pool is empaty';
      }
    }
}
}

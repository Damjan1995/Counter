const numberValue = document.querySelector('.value');
const btns = document.querySelectorAll('.btn'); // Ke dobieme Node Lista - Koja e Array like - Na ova mozi da klajme forEach()


// const btnDecrese = document.querySelector('.decrese');
// const btnReset = document.querySelector('.reset');
// const btnIncrese = document.querySelector('.increase');



// Counter set
let counter = 0;

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const style = e.currentTarget.classList;
        if(style.contains('decrese')){
            counter--;
            numberValue.textContent = counter;
        } else if(style.contains('increase')){
            counter++;
            numberValue.textContent = counter;
        } else if(style.contains('reset')){
            counter = 0;
            numberValue.textContent = 0;
        } if(counter < 0){
            numberValue.style.color = 'Red';
        }else if(counter > 0){
            numberValue.style.color = 'Green';
        }else if(counter === 0){
            numberValue.style.color = 'Black';
        }
        
    })
})
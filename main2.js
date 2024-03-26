function playt(){
    window.location = "Tic Tac Toe Phone/index.html"
}

function plays(){
    window.location = "Snake Game/index.html"
}

function back(){
    window.location = "index.html"
}

window.addEventListener('scroll', () => {
    const text = document.querySelector('.topic');
    const textPosition = text.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if(textPosition < screenPosition){
      text.classList.add('visible');
    } else {
      text.classList.remove('visible');
    }
});

window.addEventListener('scroll', () => {
    const text = document.querySelector('.topic2');
    const textPosition = text.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if(textPosition < screenPosition){
      text.classList.add('visible');
    } else {
      text.classList.remove('visible');
    }
});

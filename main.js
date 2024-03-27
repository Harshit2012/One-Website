function go_play(){
    window.location = 'index2.html'
}

function go_open(){
    window.location = 'index3.html'
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

$(window).load(function() {
  $(".se-pre-con").fadeOut("slow");;
});

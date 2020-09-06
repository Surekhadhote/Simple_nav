const menu = document.querySelector('#menu');
const container = document.querySelector('#container');
const sidenav = document.querySelector('#sidenav');
const close = document.querySelector('#close');
menu.addEventListener('click',function(){
    container.style.transform = 'translateX(200px) scale(.4) rotateY(-6deg) skewY(3deg)';
    container.style.filter = 'blur(1.5px)';
    sidenav.style.left = '2%';
  
});

close.addEventListener('click',function(){
    container.style.transform='translateX(0px) scale(1)';
    container.style.filter = 'blur(0px)';
    sidenav.style.left = '-20%';
});

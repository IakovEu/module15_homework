document.querySelector('.btn').addEventListener('click', ()=>{
    document.querySelector('.btn__img-1').classList.toggle('active');
    document.querySelector('.btn__img-2').classList.toggle('active');
})

document.querySelector('.btn-1').addEventListener('click', ()=>{
    alert(`width - ${window.screen.width}, height - ${window.screen.height}`);
})

document.addEventListener('click', e => {
    const el = e.target;
    if(el.classList.contains('menu-item')){
        document.body.style.overflow = "visible";
    }
})

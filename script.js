window.addEventListener('load', ()=>{
    const heroText = document.querySelector('.hero');
    heroText.computedStyleMap.opacity = 0;
    heroText.computedStyleMap.transition = 'opacity 2s ease-in-out';
    setTimeout(() =>  heroText.style.opacity = 1, 500)
    });

    window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('header');
    if (window.scrollY > 50) {
        Headers.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        Headers.style.backdropFilter = 'blur(10px)';
    }else{
        Headers.style.backgroundColor = 'transparent';
    }
});
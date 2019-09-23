document.addEventListener("DOMContentLoaded", function(){
    const preload = document.getElementById('preload');
    setTimeout(function(){
        preload.classList.remove('preload');
    }, 100);
});
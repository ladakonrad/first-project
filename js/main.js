$(document).ready(function() { 

let anchorlinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorlinks) {
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href');
        let target = document.querySelector('[id="'+hashval.substr(1)+'"]');
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        history.pushState(null, null, hashval);
        e.preventDefault();
    })
}
});
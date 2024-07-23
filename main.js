// add year of the moment to the Ring
let year = new Date();
document.getElementById('Ring').innerHTML = `© ${year.getFullYear()} AbriDigital All rights reserved` 
// active scroll up button
let ScrollUpBtn = document.getElementById('ScrollUpBtn');
ScrollUpBtn.onclick = () => scroll({ top: 0 });
onscroll = ()=> {
    (scrollY >= 250)?ScrollUpBtn.classList.remove('opacity-0'):ScrollUpBtn.classList.add('opacity-0')
}
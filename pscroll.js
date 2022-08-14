let ptitle = document.querySelector('.ptitle');
let ptitler = document.querySelector('.ptitler');

window.onscroll = () =>{
    let pos = window.pageYOffset;
    ptitle.style.right = `${0.7*pos}px`;
    ptitler.style.right = `${900-0.7*pos}px`;
}
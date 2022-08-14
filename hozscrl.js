let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let foutline = document.querySelector('.foutline');
let loutline = document.querySelector('.loutline');
let pfpimg = document.querySelector('.pfpimg');
let shader = document.querySelector('.shader');
let maintxt = document.querySelector('.maintxt');

let params = new URLSearchParams(location.search);
console.log(params.get('b'));
if (params.get('b')) {window.scrollTo(0, document.body.clientHeight);}
function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}
function hideURLParams() {
	//Parameters to hide (ie ?success=value, ?error=value, etc)
	var hide = ['b'];
	for(var h in hide) {
        console.log(getURLParameter(h));
		if(getURLParameter(h)) {
			history.replaceState(null, document.getElementsByTagName("title")[0].innerHTML, window.location.pathname);
		}
	}
}
window.onload = hideURLParams;
window.onscroll = () => {
    let pos = window.pageYOffset;
    if(params.get('b')) {window.scrollTo(0, document.body.clientHeight), document.body.style.overflow = 'hidden';};
    fname.style.left = `${-0.25 * (500 - pos)}%`;
    foutline.style.left = `${-0.25 * (500 - pos)}%`;
    lname.style.right = `${-0.25 * (600 - pos)}%`;
    loutline.style.right = `${-0.25 * (600 - pos)}%`;
    foutline.style.top = fname.style.top;
    var upmv; upmv = (900 - pos);
    if (upmv > 200) { pfpimg.style.top = `${upmv}px`; } else pfpimg.style.top=`200px`;
    if (pos > 300 && pos < 10000) shader.style.right = `${0.25 * (1170 - pos * 0.7)}%`;
    // if (0.25* (1100-pos*0.7) > 5) 
    if (1350 - 0.75 * pos > 0) maintxt.style.left = `${1350 - 0.75 * pos}%`;
    else maintxt.style.left = `0%`;
    shader.style.right = `${0.25 * (1170 - pos * 0.7) - 10}%`
    // console.log(0.25* (1100-pos*0.7));
}
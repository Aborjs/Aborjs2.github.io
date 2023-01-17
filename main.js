const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("Enter your name");
    
    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "what!!! kung ako 'yan hindi kita ginaganyan because as an atenean you we do what best for girls like you and you deserve guys like me uh uh omsim";
    }

    if (n.length > 0) {
        alert("hi ako parin ba");
        alert('pano pag hindi na');
        alert('pano nako');
        alert('bakit');
        alert('ka nagiba');
        alert('meron nabang iba');
        alert('i like ya cut g');
        alert('I love You ' + n);
        main.style.display = 'block';
        break;
    }
}

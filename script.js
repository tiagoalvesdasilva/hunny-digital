let radio = document.querySelector('.manual-btn')
let cont = 1
let botao = document.querySelector('.scrollbutton');

document.getElementById('radio1').checked = true
setInterval(() => {
    proximaImg()
}, 2000)
function proximaImg(){
    cont++
    if(cont > 6){
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true
}

function subirTela (){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
function decidirBotao(){
    if (window.scrollY === 0){
        document.querySelector('.scrollbutton').style.display = 'none';
    } else{
        document.querySelector('.scrollbutton').style.display = 'block'
    }
}
window.addEventListener('scroll', decidirBotao)
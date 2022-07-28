function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'img/manha-pq.png'
        document.body.style.background = "#e9dccc"
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE
        img.src = 'img/tarde-pq.png'
        document.body.style.background = "#c36e2d"
    } else {
        // BOA NOITE
        img.src = 'img/noite-pq.png'
        document.body.style.background = "#af7da2"
    }
}


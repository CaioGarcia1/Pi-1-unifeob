function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<strong> Agora são ${hora} horas. </strong>`
    if(hora>= 0 && hora<=12){
        img.src = 'images/manha.png'
        document.body.style.background = '#3aaffd'
    } else if(hora>12 && hora<18){
        img.src = 'images/tarde.png'
        document.body.style.background = '#ffb71c'
    } else{
        img.src = 'images/noite.png'
        document.body.style.background = '#484bff'
    }
}

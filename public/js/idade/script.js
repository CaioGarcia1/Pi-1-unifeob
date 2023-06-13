function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()

    var ano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(ano.value.length == 0 || ano.value>anoAtual){
        window.alert(`[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE`) 
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(ano.value)
       if(idade<=122){ 
        if(fsex[0].checked && idade>=0 && idade<=12){
            res.innerHTML = `<p> Menino de ${idade} anos </p> <p> <img src="images/Criança_homem.png"> </p>`
        }
        else if(fsex[0].checked && idade>12 && idade<=18 ){
            res.innerHTML = `<p> Garoto de ${idade} anos </p> <p> <img src="images/Jovem_homem.png"> </p>`
        }
        else if(fsex[0].checked && idade>18 && idade <=59){
            res.innerHTML = `<p> Homem de ${idade} anos </p> <p> <img src="images/Adulto_homem.png"> </p>`
        }
        else if(fsex[0].checked && idade>59){
            res.innerHTML = `<p> Idoso de ${idade} anos </p> <p> <img src="images/Idoso_homem.png"> </p>`
        }
        else if(fsex[1].checked && idade<=12){
            res.innerHTML = `<p> Menina de ${idade} anos </p> <p> <img src="images/Criança_mulher.png"> </p>`
        }
        else if(fsex[1].checked && idade>12 && idade<=18 ){
            res.innerHTML = `<p> Garota de ${idade} anos </p> <p> <img src="images/Jovem_mulher.png"> </p>`
        }
        else if(fsex[1].checked && idade>18 && idade <=59){
            res.innerHTML = `<p> Mulher de ${idade} anos </p> <p> <img src="images/Adulto_mulher.png"> </p>`
        }
        else if(fsex[1].checked && idade>59){
            res.innerHTML = `<p> Idosa de ${idade} anos </p> <p> <img src="images/Idoso_mulher.png"> </p>`
        }
    } else{
        window.alert(`[ERRO] Até a data de hoje não existem humanos com mais de 122 anos`)
    }
    }
}
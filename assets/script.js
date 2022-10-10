function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Preencha os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','menino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','homem-jovem.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //idoso
                setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                //Joven
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'mulher adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'mulher idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        
    }
}
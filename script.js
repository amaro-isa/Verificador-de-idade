function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res");
   
    if(fano.value == 0 || fano.value > ano) {
        alert("[ERROR] Verifique os dados novamente!");
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value);
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if(fsex[0].checked) {
            genero = "Masculino"
            if(idade >= 0 && idade < 14) {
                //criança
                img.setAttribute("src", "foto.01.png")
            } else if (idade >= 14 && idade < 35) {
                //jovem
                img.setAttribute("src", "foto.03.png")
            } else if (idade >= 35 && idade < 56) {
                //adulto
                img.setAttribute("src", "foto.05.png")
            } else if (idade >= 56) {
                //idoso
                img.setAttribute("src", "foto.07.png")
            }    

        } else if(fsex[1].checked) {
            genero = "Feminino"
            if(idade >= 0 && idade < 14) {
                //criança
                img.setAttribute("src", "foto.02.png")
            } else if (idade >= 14 && idade < 35) {
                //jovem
                img.setAttribute("src", "foto.04.png")
            } else if (idade >= 35 && idade < 56) {
                //adulto
                img.setAttribute("src", "foto.06.png")
            } else if (idade >= 56) {
                //idoso
                img.setAttribute("src", "foto.08.png")
            }    
        }
        res.innerHTML =`Detectamos uma pessoa do gênero ${genero} com ${idade} de idade.`
        res.appendChild(img)
    }
    }

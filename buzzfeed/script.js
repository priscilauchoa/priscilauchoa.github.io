window.addEventListener('DOMContentLoaded', function (event) {
    
    const botao = document.getElementById("botao");
    botao.addEventListener("click", function () {
        const certa = document.querySelectorAll("input[name=certo]:checked").length;
        console.log(certa);
       

        if(certa <= 4){
            document.querySelector("#resposta").innerHTML = `<p>Você é poser</p><img class="gif" src="./poser.gif">`
        }
        else if(certa >= 5){
            document.querySelector("#resposta").innerHTML = `<p>Você manja um pouco</p><img class="gif" src="./sabepouco.gif>`
        
        }
        else if (certa > 6){
            document.querySelector("#resposta").innerHTML = `<p>Manja muito </p><img class="gif" src="./pamlas.gif>`
        }
        else{
            document.querySelector("#resposta").innerHTML = `<p> Escolha as opções corretas</p>`
        
        }
    })

})




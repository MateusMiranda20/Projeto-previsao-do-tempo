
 let chave ="a7cae2d6aca03cc27d0bd37d64c8c627"

function colocaNatela(dados) {
    console.log(dados)
    

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp_max").innerHTML = Math.floor(dados.main.temp_max) + "°C"
    document.querySelector(".temp_min").innerHTML = Math.floor(dados.main.temp_min) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.wind.deg + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"


}


async function buscarCidade(cidade){

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
    .then( resposta => resposta.json())

    colocaNatela(dados)

}



function cliqueiNoBotao() {
    
    let cidade =  document.querySelector(".input-cidade").value

    buscarCidade(cidade)
} 
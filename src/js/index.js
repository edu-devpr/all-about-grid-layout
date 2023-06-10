document.querySelector(`.perguntas-do-conceito`).addEventListener(`change`, (event) => {
    let resposta = document.querySelector(`#retorno-dos-conceitos`)
    let conteudoDoConceito = event.target.value
    

    function returnoDoConceitoSelecionado() {

        resposta.innerHTML = `<p> ${conteudoDoConceito}</p>`

        if (conteudoDoConceito !== ``) {
            resposta.classList.add(`caixa-da-resposta`)

        } else if (conteudoDoConceito === ``) { 
            resposta.classList.remove(`caixa-da-resposta`)
            
        }

    }

    returnoDoConceitoSelecionado()

})

















// O MÉTODO toggle() não é interesente o seu uso em elementos HTML como <select> pois tem um conjunto de opções que podem ser selecionados pelo usuário. O toggle() só é interesanto quando não ouver multiplas opções. 


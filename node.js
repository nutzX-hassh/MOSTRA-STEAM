function mostrarTela(id, botao) {



    const telas =
        document.querySelectorAll(".tela");

    telas.forEach(tela => {

        tela.classList.remove("ativa");

    });




    const tela =
        document.getElementById(id);

    tela.classList.add("ativa");




    const botoes =
        document.querySelectorAll(".nav-item");

    botoes.forEach(item => {

        item.classList.remove("ativo");

    });


    if (botao) {

        botao.classList.add("ativo");

    }




    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}




function selecionarHumor(botao, humor) {

    const botoes =
        document.querySelectorAll(".humor");




    botoes.forEach(item => {

        item.classList.remove("selecionado");

    });


   

    botao.classList.add("selecionado");


    const resposta =
        document.getElementById("respostaHumor");


    if (humor === "Muito bem") {

        resposta.innerHTML =
            "Que bom! Continue cuidando de você. 💜";

    }

    else if (humor === "Bem") {

        resposta.innerHTML =
            "Fico feliz! Que seu dia continue assim. ✨";

    }

    else if (humor === "Neutro") {

        resposta.innerHTML =
            "Tudo bem não estar bem o tempo todo. 🌸";

    }

    else {

        resposta.innerHTML =
            "Você não precisa passar por isso sozinho. 🤝";

    }

}




let pergunta = 1;


function abrirQuiz() {

    document
        .getElementById("modalQuiz")
        .classList.add("ativo");


    pergunta = 1;


    document
        .getElementById("perguntaQuiz")
        .style.display = "block";


    document
        .getElementById("resultadoQuiz")
        .classList.remove("ativo");

}


function fecharQuiz() {

    document
        .getElementById("modalQuiz")
        .classList.remove("ativo");

}


function proximaPergunta() {

    const area =
        document.getElementById("perguntaQuiz");


    if (pergunta === 1) {

        area.innerHTML = `

            <p>
                O que costuma ajudar você
                quando está estressado?
            </p>

            <button onclick="proximaPergunta()">
                🎧 Escutar música
            </button>

            <button onclick="proximaPergunta()">
                🧘 Fazer uma pausa
            </button>

            <button onclick="proximaPergunta()">
                🗣️ Conversar com alguém
            </button>

        `;

        pergunta++;

    }

    else if (pergunta === 2) {

        area.innerHTML = `

            <p>
                Quando algo está difícil,
                você consegue pedir ajuda?
            </p>

            <button onclick="finalizarQuiz()">
                💜 Sim
            </button>

            <button onclick="finalizarQuiz()">
                🌸 Às vezes
            </button>

            <button onclick="finalizarQuiz()">
                🤍 Ainda estou aprendendo
            </button>

        `;

        pergunta++;

    }

}


function finalizarQuiz() {

    document
        .getElementById("perguntaQuiz")
        .style.display = "none";


    document
        .getElementById("resultadoQuiz")
        .classList.add("ativo");

}




let respirando = false;


async function iniciarRespiracao() {

    if (respirando) return;


    respirando = true;


    const circulo =
        document.getElementById("circulo");


    const texto =
        document.getElementById("textoRespiracao");


    for (let i = 0; i < 3; i++) {

       

        circulo.innerText =
            "Inspire";


        texto.innerText =
            "Inspire lentamente";


        circulo.classList.add("crescer");


        await esperar(4000);


 

        circulo.innerText =
            "Expire";


        texto.innerText =
            "Solte o ar devagar";


        circulo.classList.remove("crescer");


        await esperar(4000);

    }


    circulo.innerText =
        "✨";


    texto.innerText =
        "Muito bem!";


    respirando = false;

}


function esperar(tempo) {

    return new Promise(resolve => {

        setTimeout(resolve, tempo);

    });

}


document
    .getElementById("modalQuiz")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            fecharQuiz();

        }

    });

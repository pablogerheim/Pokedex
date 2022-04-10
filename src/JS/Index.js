const info = {
    pokedex: [{
        id: "#001",
        titulo: "Bulbasaur",
        features1: "Grass",
        features2: "Poison",
        image: "../img/doguito.svg"
    },
    {
        id: "#002",
        titulo: "Bulbasaur",
        features1: "Grass",
        features2: "Poison",
        image: "../img/doguito.svg"
    },
    {
        id: "#003",
        titulo: "Bulbasaur",
        features1: "Grass",
        features2: "Poison",
        image: "../img/doguito.svg"
    },
    {
        id: "#004",
        titulo: "Bulbasaur",
        features1: "Grass",
        features2: "Poison",
        image: "../img/doguito.svg"
    }, {
        id: "#001",
        titulo: "Bulbasaur",
        features1: "Grass",
        features2: "Poison",
        image: "../img/doguito.svg"
    },
    {
        id: "#002",
        titulo: "Bulbasaur",
        features1: "Grass",
        features2: "Poison",
        image: "../img/doguito.svg"
    },
    {
        id: "#003",
        titulo: "Bulbasaur",
        features1: "Grass",
        features2: "Poison",
        image: "../img/doguito.svg"
    },
    {
        id: "#004",
        titulo: "Bulbasaur",
        features1: "Grass",
        features2: "Poison",
        image: "../img/doguito.svg"
    }, {
        id: "#001",
        titulo: "Bulbasaur",
        features1: "Grass",
        features2: "Poison",
        image: "../img/doguito.svg"
    },
    {
        id: "#002",
        titulo: "Bulbasaur",
        features1: "Grass",
        features2: "Poison",
        image: "../img/doguito.svg"
    },
    {
        id: "#003",
        titulo: "Bulbasaur",
        features1: "Grass",
        features2: "Poison",
        image: "../img/doguito.svg"
    },
    {
        id: "#004",
        titulo: "Bulbasaur",
        features1: "Grass",
        features2: "Poison",
        image: "../img/doguito.svg"
    },
    ]
}

function imprimeCards(info) {
    info.pokedex.forEach(element => { executa(element) })
}

function executa(item) {
    let cards = document.createElement('div')
    cards.classList.add("cartao")
    let conteudo = `
        <img alt="imagem pokemon" src="${item.image}" class="cartao__image">
        <div class="cartao__conteudo">
            <h2 class="cartao__titulo">${item.titulo}</h2>
            <div class="cartao__caracteristica">
                <p class="cartao__caracteristica__cada" > ${item.features1}</p>
                <p class="cartao__caracteristica__cada" > ${item.features2}</p>
            </div>
        <p class="cartao__id">${item.id}</p>
        </div>
    `
    cards.innerHTML = conteudo

    document.querySelector('main').appendChild(cards)
}
imprimeCards(info)
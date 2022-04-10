import '../CSS/Reset.css'
import image from "../IMG/doguito.svg";
import "../CSS/scss/style.css"

function Corpo() {
    const info = {
        pokedex: [{
            id: "#001",
            titulo: "Bulbasaur",
            caracteristica1: "Grass",
            caracteristica2: "Poison",
            image: "../img/doguito.svg"
        },
        {
            id: "#002",
            titulo: "Bulbasaur",
            caracteristica1: "Grass",
            caracteristica2: "Poison",
            image: "../img/doguito.svg"
        },
        {
            id: "#003",
            titulo: "Bulbasaur",
            caracteristica1: "Grass",
            caracteristica2: "Poison",
            image: "../img/doguito.svg"
        },
        {
            id: "#004",
            titulo: "Bulbasaur",
            caracteristica1: "Grass",
            caracteristica2: "Poison",
            image: "../img/doguito.svg"
        }, {
            id: "#001",
            titulo: "Bulbasaur",
            caracteristica1: "Grass",
            caracteristica2: "Poison",
            image: "../img/doguito.svg"
        },
        {
            id: "#002",
            titulo: "Bulbasaur",
            caracteristica1: "Grass",
            caracteristica2: "Poison",
            image: "../img/doguito.svg"
        },
        {
            id: "#003",
            titulo: "Bulbasaur",
            caracteristica1: "Grass",
            caracteristica2: "Poison",
            image: "../img/doguito.svg"
        },
        {
            id: "#004",
            titulo: "Bulbasaur",
            caracteristica1: "Grass",
            caracteristica2: "Poison",
            image: "../img/doguito.svg"
        }, {
            id: "#001",
            titulo: "Bulbasaur",
            caracteristica1: "Grass",
            caracteristica2: "Poison",
            image: "../img/doguito.svg"
        },
        {
            id: "#002",
            titulo: "Bulbasaur",
            caracteristica1: "Grass",
            caracteristica2: "Poison",
            image: "../img/doguito.svg"
        },
        {
            id: "#003",
            titulo: "Bulbasaur",
            caracteristica1: "Grass",
            caracteristica2: "Poison",
            image: "../img/doguito.svg"
        },
        {
            id: "#004",
            titulo: "Bulbasaur",
            caracteristica1: "Grass",
            caracteristica2: "Poison",
            image: "../img/doguito.svg"
        },
        ]
    }

    return (
        <main className='principal'>
            {info.pokedex.map((cartao) => (
                <div className="principal__cartao">
                    <img src={image} className="principal__cartao__image"></img>
                    <div className="principal__cartao__conteudo">
                        <h2 className="principal__cartao__titulo">{cartao.titulo}</h2>
                        <div className="principal__cartao__caracteristica">
                            <p className="principal__cartao__caracteristica__cada" > {cartao.caracteristica1}</p>
                            <p className="principal__cartao__caracteristica__cada" > {cartao.caracteristica2}</p>
                        </div>
                        <p className="principal__cartao__id">{cartao.id}</p>
                    </div>
                </div>
            ))}
        </main>
    )
}
export { Corpo }

































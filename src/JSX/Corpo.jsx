import '../CSS/Reset.css'
import  image  from "../IMG/doguito.svg";
import "../CSS/Corpo.css"

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
                <div className="cartao">
                    <img alt='imagen do pokemon' src={image} className="cartao__image"></img>
                    <div className="cartao__conteudo">
                        <h2 className="cartao__titulo">{cartao.titulo}</h2>
                        <div className="cartao__caracteristica">
                            <p className="cartao__caracteristica__cada" > {cartao.caracteristica1}</p>
                            <p className="cartao__caracteristica__cada" > {cartao.caracteristica2}</p>
                        </div>
                        <p className="cartao__id">{cartao.id}</p>
                    </div>
                </div>

            ))}
        </main>
    )
}
export { Corpo }
































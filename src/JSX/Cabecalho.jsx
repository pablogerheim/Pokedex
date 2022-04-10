import '../CSS/Reset.css'
import "../CSS/Cabecalho.css"

function Cabecalho() {

    return (
        <header className='cabecalho'>
            <div className="cabecalho__ferramenta">
                <h1 className="cabecalho__titulo" >Pokedex</h1>
            </div>
            <div className="procurar">
                <button className="procurar__icone"></button>
                <input placeholder="Search Pokemon" className="procurar__entrada" />
            </div>
        </header>
    )
}
export { Cabecalho }
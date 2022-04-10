import '../CSS/Reset.css'
import "../CSS/scss/style.css"

function Cabecalho() {

    return (
        <header className='cabecalho'>
            <div className="cabecalho__ferramenta">
                <h1 className="cabecalho__ferramenta__titulo" >Pokedex</h1>
            </div>
            <div className="cabecalho__procura">
                <button className="cabecalho__procura__icone"></button>
                <input placeholder="Search Pokemon" className="cabecalho__procura__entrada" />
            </div>
        </header>

    )
}
export { Cabecalho }

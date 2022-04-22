import '../CSS/Reset.css'
import "../CSS/scss/style.css"
import { FcSearch } from "react-icons/fc";

function Cabecalho({
    onSearchange = null
}) {
    function controleFiltro(params) {
        onSearchange(params)
    }
    return (
        <header className='cabecalho'>
            <div className="cabecalho__ferramenta">
                <h1 className="cabecalho__ferramenta__titulo" >Pokedex</h1>
            </div>
            <div className="cabecalho__procura">
                <button style={{ border: "none", cursor: "pointer"}}>
                    <FcSearch className='cabecalho__procura__icone' />
                </button>
                <input type='search'
                    onChange={evt => controleFiltro(evt.target.value)}
                    placeholder="Search Pokemon"
                    className="cabecalho__procura__entrada" />
            </div>
        </header>
    )
}
export { Cabecalho }
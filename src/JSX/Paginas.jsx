import '../CSS/Reset.css'
import "../CSS/Paginas.css";

function Paginas() {

    return (
        <div className="paginas">
            <button className="pagina__voltar"> </button>
            <button className="pagina--ativa">1</button>
            <button className="pagina">2</button>
            <button className="pagina">3</button>
            <span className='span'>...</span >
            <button className="pagina">92</button>
            <button className="pagina">93</button>
            <button className="pagina">94</button>
            <button className="pagina__proximo">  </button>  
        </div>
    )
}
export {Paginas}
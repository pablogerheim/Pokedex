import '../CSS/Reset.css'
import "../CSS/scss/style.css";

function Paginas() {

    return (
        <div className="paginas">
            <button className="paginas__cada__voltar"> </button>
            <button className="paginas__cada--ativa">1</button>
            <button className="paginas__cada">2</button>
            <button className="paginas__cada">3</button>
            <span className='paginas__cada__span'>...</span >
            <button className="paginas__cada">92</button>
            <button className="paginas__cada">93</button>
            <button className="paginas__cada">94</button>
            <button className="paginas__cada__proximo">  </button>  
        </div>
    )
}
export {Paginas}
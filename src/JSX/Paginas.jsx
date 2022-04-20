import '../CSS/Reset.css'
import "../CSS/scss/style.css";
import { useState, useEffect } from 'react'

function Paginas({
    dataLength = 0
}) {
    const [numeropaginas, setNumeropaginas] = useState([])
    const [paginaSelecionada, setPaginaSelecionada] =useState(0)
    useEffect(() => {
        if (dataLength > 0) {
            let auxilioPaginas = (dataLength / 12).toFixed(1)
            let arrNumeropaginas = []
            for (let i = 0; i < auxilioPaginas; i++) { arrNumeropaginas.push(i) }
            setNumeropaginas(arrNumeropaginas)
        }

        console.log(numeropaginas)
    }, [dataLength])

    function styleAtivo (pagina ) {
        let styleA = pagina === paginaSelecionada ?  "paginas__cada--ativa":'paginas__cada'
        return styleA
    }


    if (dataLength <= 12) { return <div> <button className="paginas__cada--ativa">1</button></div> }
    return (
        <div className="paginas">
            {numeropaginas.map(numeroPagina => {
                if (paginaSelecionada <= 2 || paginaSelecionada >= numeropaginas.length -2 ) {
                    return (<>
                        <button className="paginas__cada__voltar"> </button>
                        <button className={styleAtivo(numeroPagina)}>{numeroPagina}</button>
                        <button className={styleAtivo(numeroPagina)}>{numeroPagina}</button>
                        <button className={styleAtivo(numeroPagina)}>{numeroPagina}</button>
                        <span className='paginas__cada__span'>...</span >
                        <button className={styleAtivo(numeroPagina)}>{numeroPagina}</button>
                        <button className={styleAtivo(numeroPagina)}>{numeroPagina}</button>
                        <button className={styleAtivo(numeroPagina)}>{numeroPagina}</button>
                        <button className="paginas__cada__proximo">  </button>
                    </>
                    )
                }
                if (paginaSelecionada <= 2 || paginaSelecionada >= numeropaginas.length -2 ) {
                    return (<>
                        <button className="paginas__cada__voltar"> </button>
                        <button className={styleAtivo(numeroPagina)}>{numeroPagina}</button>
                        <button className={styleAtivo(numeroPagina)}>{numeroPagina}</button>
                        <button className={styleAtivo(numeroPagina)}>{numeroPagina}</button>
                        <span className='paginas__cada__span'>...</span >
                        <button className={styleAtivo(numeroPagina)}>{numeroPagina}</button>
                        <button className={styleAtivo(numeroPagina)}>{numeroPagina}</button>
                        <button className={styleAtivo(numeroPagina)}>{numeroPagina}</button>
                        <button className="paginas__cada__proximo">  </button>
                    </>
                    )
                }

            })}
        </div>
    )
}
export { Paginas }

{/* <button className="paginas__cada__voltar"> </button>
            <button className="paginas__cada--ativa">1</button>
            <button className="paginas__cada">2</button>
            <button className="paginas__cada">3</button>
            <span className='paginas__cada__span'>...</span >
            <button className="paginas__cada">92</button>
            <button className="paginas__cada">93</button>
            <button className="paginas__cada">94</button>
            <button className="paginas__cada__proximo">  </button>   */}
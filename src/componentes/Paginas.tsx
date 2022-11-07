import '../CSS/Reset.css'
import "../CSS/scss/style.css"
import { useState, useEffect } from 'react'
import { v4 } from "uuid"
import EventBus from "../helper/EventBus"
import { Ipaginas } from "../types/types";

function Paginas({
    pagina = 1,
    onSelectpage
}: Ipaginas): JSX.Element {
    const [numeropaginas, setNumeropaginas] = useState<number[]>([])
    useEffect(() => {
        let arrNumeropaginas = []
        for (let i = 0; i < 54; i++) { arrNumeropaginas.push(i + 1) }
        console.log(arrNumeropaginas)
        setNumeropaginas(arrNumeropaginas)
    }, [])

    function styleAtivo(numeropagina: number) {
        return numeropagina === pagina ? "paginas__cada--ativa" : 'paginas__cada'
    }

    function controlePagina(params: number) {
        onSelectpage(params)
        setTimeout(() => {
            EventBus.dispatch("search", {})
        }, 0);
    }

    function paginacao() {
        if (13 <= 12) { return <div> <button className="paginas__cada--ativa">1</button></div> }
        else if (numeropaginas.length <= 8) {
            return (<>
                {numeropaginas.map(numeroPagina => {
                    return (<button type='button' onClick={evt => controlePagina(numeroPagina)} key={v4()} className={styleAtivo(numeroPagina)}>{numeroPagina}</button>)
                })}
            </>)
        } else if (pagina <= 3 || pagina >= numeropaginas.length - 2) {
            return (<>
                <button type='button' onClick={evt => controlePagina(numeropaginas[0])} className={styleAtivo(numeropaginas[0])}>{numeropaginas[0]}</button>
                <button type='button' onClick={evt => controlePagina(numeropaginas[1])} className={styleAtivo(numeropaginas[1])}>{numeropaginas[1]}</button>
                <button type='button' onClick={evt => controlePagina(numeropaginas[2])} className={styleAtivo(numeropaginas[2])}>{numeropaginas[2]}</button>
                <button type='button' onClick={evt => controlePagina(numeropaginas[3])} className={styleAtivo(numeropaginas[3])}>{numeropaginas[3]}</button>
                <span className='paginas__cada__span'>...</span >
                <button type='button' onClick={evt => controlePagina(numeropaginas.length - 3)} className={styleAtivo(numeropaginas.length - 3)}>{numeropaginas.length - 3}</button>
                <button type='button' onClick={evt => controlePagina(numeropaginas.length - 2)} className={styleAtivo(numeropaginas.length - 2)}>{numeropaginas.length - 2}</button>
                <button type='button' onClick={evt => controlePagina(numeropaginas.length - 1)} className={styleAtivo(numeropaginas.length - 1)}>{numeropaginas.length - 1}</button>
                <button type='button' onClick={evt => controlePagina(numeropaginas.length)} className={styleAtivo(numeropaginas.length)}>{numeropaginas.length}</button>
            </>)
        } else {
            return (<>
                <button type='button' onClick={evt => controlePagina(numeropaginas[0])} className='paginas__cada'>{numeropaginas[0]}</button>
                <span className='paginas__cada__span'>...</span >
                <button type='button' onClick={evt => controlePagina(numeropaginas[pagina - 2])} className='paginas__cada'>{numeropaginas[pagina - 2]}</button>
                <button className="paginas__cada--ativa">{pagina}</button>
                <button type='button' onClick={evt => controlePagina(numeropaginas[pagina])} className='paginas__cada'>{numeropaginas[pagina]}</button>
                <span className='paginas__cada__span'>...</span >
                <button type='button' onClick={evt => controlePagina(numeropaginas.length)} className='paginas__cada'>{numeropaginas.length}</button>
            </>)
        }
    }
    return (
        <div className="paginas">
            <button disabled={pagina === numeropaginas[0]} onClick={evt => controlePagina(pagina - 1)} className="paginas__cada__voltar"> </button>
            {paginacao()}
            <button disabled={pagina === numeropaginas.length} onClick={evt => controlePagina(pagina + 1)} className="paginas__cada__proximo">  </button>
        </div>)

}

export { Paginas }
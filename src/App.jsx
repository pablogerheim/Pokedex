import { Cabecalho } from './JSX/Cabecalho';
import { Corpo } from './JSX/Corpo.jsx';
import { Paginas } from "./JSX/Paginas";
import { Rapi } from './JS/API'
import { useState, useEffect } from 'react'

function App() {
    const [data, setData] = useState([])
    const [datasuporte, setDatasuporte] = useState([])
    const [pagina, setPagina] = useState(1)

    useEffect(() => {
        async function dataStart() {
            let apiData = await Rapi()
            setDatasuporte(apiData.pokedex)
        }
        dataStart()
    }, [])

    useEffect(() => {
        let minhaPagina = pagina * 12
        let arrPaginaAuxilio = []
        datasuporte.map((pokemon, i) => {
            if (minhaPagina <= i && i < (minhaPagina + 12)) {
                arrPaginaAuxilio.push(pokemon)
            }
        })
        setData(arrPaginaAuxilio)
    }, [pagina, datasuporte])


    async function dataFilter(filter) {
        let apiData = await Rapi()
        let filterData = apiData.pokedex.filter(({ titulo }) => titulo.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
        setData(filterData)
    }

    return (
        <>
            <Cabecalho
                onSearchange={dataFilter} />
            <Corpo
                dataProp={data} />
            <Paginas
                dataLength={datasuporte.length}
                pagina={pagina}
                onSelectpage={setPagina} />
        </>
    )
}

export default App;

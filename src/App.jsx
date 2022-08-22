import { Cabecalho } from './JSX/Cabecalho'
import { Corpo } from './JSX/Corpo.jsx'
import { Paginas } from "./JSX/Paginas"
import { pokeAPIpage, pokeAPIsearch, pokeAPIbase } from './JS/API'
import { useState, useEffect } from 'react'

function App() {
    const [data, setData] = useState([])
    const [datalength, setDatalength] = useState(0)
    const [pagina, setPagina] = useState(1)

    useEffect(() => {
        async function start() {
            let dataLength = await pokeAPIbase()
            setDatalength(dataLength)
        }
        start()
    }, [])

    async function verifica(n = 1) {
    let data = await fetch( `https://pokeapi.co/api/v2/pokemon-species/${n+1}/`)
    return data.status
    }

    useEffect(() => {
      let offset = (pagina - 1) * 12
      async function buscaPagina() {
        if ((await verifica(offset)) === 200) {
          setData(await pokeAPIpage(offset))
        } 
      }
      buscaPagina();
    }, [pagina]);

    async function dataFilter(filter) {
        setTimeout(async() => {
            let {pokedexArr, filterLength} = await pokeAPIsearch(filter)
            setData(pokedexArr )
            setDatalength(filterLength)
            if(filter === ''){ setPagina(1)}
        }, 300)
    }

    return (
      <>
        <Cabecalho dataFilter={dataFilter} />
        <Corpo dataProp={data} />
        <Paginas
          dataLength={datalength}
          pagina={pagina}
          onSelectpage={setPagina}
        />
      </>
    );
}

export default App

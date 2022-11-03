import { Cabecalho } from './componentes/Cabecalho'
import { Corpo } from './componentes/Corpo'
import { Paginas } from "./componentes/Paginas"
import { useApi } from './helper/API'
import { useState, useEffect } from 'react'
import { Idata } from "./types/types";

function App() {
    const [data, setData] = useState<Idata[]>([])
    const [datalength, setDatalength] = useState<number>(0)
    const [pagina, setPagina] = useState<number>(1)
    const [searchState, setSearchState ] = useState<boolean>(false)
    const api = useApi()

    useEffect(() => {
        async function start() {
            let dataLength = api.pokeAPIbase()
            setDatalength(dataLength)
        }
        start()
    }, [])

    useEffect(() => {
      let offset:number = (pagina - 1) * 12
      async function buscaPagina() {
        if ((await api.verifica(offset)) === 200) {
          console.log(await api.pokeAPIpage(offset))
          setData(await api.pokeAPIpage(offset))
        } 
      }
      buscaPagina();
    }, [pagina]);

    async function dataFilter(filter:string) {
        setTimeout(async() => {
            let {pokedexArr, } = await api.pokeAPIsearch(filter)
            setSearchState(true)
            setData(pokedexArr )

            if(filter === ''){ setPagina(1), setSearchState(false)}
        }, 300)
    }

    return (
      <>
        <Cabecalho dataFilter={dataFilter} />
        <Corpo dataProp={data} />
        {searchState||<Paginas
          dataLength={datalength}
          pagina={pagina}
          onSelectpage={setPagina}
        />}
      </>
    );
}

export default App

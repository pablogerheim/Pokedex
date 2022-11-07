import { Cabecalho } from './componentes/Cabecalho'
import { Corpo } from './componentes/Corpo'
import { Paginas } from "./componentes/Paginas"
import { useApi } from './helper/API'
import { useState, useEffect } from 'react'
import { Idata } from "./types/types";

function App() {
  const [data, setData] = useState<Idata[]>([])
  const [pagina, setPagina] = useState<number>(1)
  const [searchState, setSearchState] = useState<boolean>(false)
  const api = useApi()

  useEffect(() => {
    let offset: number = (pagina - 1) * 12
    async function buscaPagina() {
      if ((await api.verifica(offset)) === 200) {
        setData(await api.pokeAPIpage(offset))
      }
    }
    buscaPagina();
  }, [pagina]);

  async function dataFilter(filter: string) {
    let { pokedexArr, } = await api.pokeAPIsearch(filter)
    setSearchState(true)
    setData(pokedexArr)
    if (filter === '') { setPagina(1), setSearchState(false) }
  }

  return (
    <>
      <Cabecalho dataFilter={dataFilter} />
      <Corpo dataProp={data} />
      {searchState || <Paginas
        pagina={pagina}
        onSelectpage={setPagina}
      />}
    </>
  );
}

export default App

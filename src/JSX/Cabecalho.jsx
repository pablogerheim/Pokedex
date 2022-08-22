import '../CSS/Reset.css'
import "../CSS/scss/style.css"
import { FcSearch } from "react-icons/fc"
import { useState, useEffect } from 'react'
import EventBus from "../JS/eventBus"

function Cabecalho({
    dataFilter = null
}) {
    const [valueSearch, setValueSearch] = useState('')

    useEffect(() => {
        EventBus.on("search", () => {
            setValueSearch('')
        });
    });

    useEffect(() => {
        EventBus.remove("search");
    }, [valueSearch]);

    function controleEntrada(params){
        dataFilter(params)
        setValueSearch(params)
    }

    return (
      <header className="cabecalho">
        <div className="cabecalho__ferramenta">
          <h1 className="cabecalho__ferramenta__titulo">Pokedex</h1>
        </div>
        <div className="cabecalho__procura">
          <button
            onClick={() => controleEntrada(valueSearch)}
            style={{ border: "none", cursor: "pointer" }}
          >
            <FcSearch className="cabecalho__procura__icone" />
          </button>
          <input
            type="search"
            onChange={(evt) => {
              controleEntrada(evt.target.value);
            }}
            value={valueSearch}
            placeholder="Search Pokemon"
            className="cabecalho__procura__entrada"
          />
        </div>
      </header>
    );
}
export { Cabecalho }
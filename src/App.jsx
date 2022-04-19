import React from 'react';
import { Cabecalho } from './JSX/Cabecalho';
import { Corpo } from './JSX/Corpo.jsx';
import { Paginas } from "./JSX/Paginas";
import { Rapi } from './JS/API'
import { useState, useEffect } from 'react'

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function dataStart() {
            let apiData = await Rapi()
            setData(apiData.pokedex)
        }
        dataStart()
    }, [])

    async function dataFilter(filter) {
        let apiData = await Rapi()
        let filterData = apiData.pokedex.filter(({ titulo }) => titulo.includes(filter))
        setData(filterData)
    }

    function handlefilter(params) {
        dataFilter(params)
    }
    return (
        <>
            <Cabecalho
                onSearchange={handlefilter} />
            <Corpo dataProp={data} />
            <Paginas />
        </>
    )
}

export default App;

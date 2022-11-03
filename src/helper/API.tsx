import axios from 'axios'
import { Iurl, Iname, Idata } from "../types/types";

let dataLength = 0
export const useApi = () => ({
    pokeAPIpage: async (offset: number = 0) => {
        let pokedexArr = []
        let URLs = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`)
            .then(res => res.data.results)
            .then(res => res.map(({ url }: Iurl) => url))
        let pokeInfo = await Promise.all(URLs.map((url: string) => axios.get(url).then(res => res.data)))
        let pokeColor = await Promise.all(URLs.map((url: string) => axios.get(url.replace("pokemon", "pokemon-species"))
            .then(res => res.data.color.name)))

        pokedexArr = pokeInfo.map((item, i) => {
            let image = item.sprites.other.dream_world.front_default === null ? "../Img/pokemon.png" : item.sprites.other.dream_world.front_default
            return ({
                "color": pokeColor[i],
                "id": item.order,
                "image": image,
                "titulo": item.name,
                "types": item.types
            })
        })
        return pokedexArr
    },
    pokeAPIsearch: async (serach: string = '') => {
        let pokedexArr: Idata[] = []
        let filterLength = 0
        if (serach === '') {
            filterLength = dataLength
            pokedexArr = await api.pokeAPIpage(0)
        }
        else {
            let URLs: string[] = []
            let pokeBaseSearch = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=500`).then(res => res.data.results)
            let filtred = pokeBaseSearch.filter(({ name }: Iname) => name.toLocaleLowerCase().includes(serach.toLocaleLowerCase()))
            filterLength = filtred.length

        if (filtred.length === 0) { console.log("erro",pokedexArr) }
            else {
                filtred.forEach((item: { url: string; }) => {
                    let url = item.url;
                    URLs.push(url)
                })
                let pokeInfo = await Promise.all(URLs.map(url => axios.get(url).then(res => res.data)))
                let pokeColor = await Promise.all(URLs.map(url => axios.get(url.replace("pokemon", "pokemon-species")).then(res => res.data.color.name)))

                pokedexArr = pokeInfo.map((item, i) => {
                    let image = item.sprites.other.dream_world.front_default === null ? "../Img/pokemon.png" : item.sprites.other.dream_world.front_default
                    return ({
                        "color": pokeColor[i],
                        "id": item.order,
                        "image": image,
                        "titulo": item.name,
                        "types": item.types
                    })
                })
            }
        }
        return { pokedexArr, filterLength }
    },
    verifica: async (n: number = 1) => {
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${n + 1}/`)
        return data.status
    },
    pokeAPIbase: () => {
        dataLength = 672; return dataLength
    }
})
const api = useApi()

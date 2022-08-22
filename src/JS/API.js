import axios from 'axios'

async function pokeAPIpage(offset = 0) {
    let pokedexArr = []
    let URLs = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`)
        .then(res => res.data.results)
        .then(res => res.map(({ url }) => url))

    let pokeInfo = await Promise.all(URLs.map(url => axios.get(url).then(res => res.data)))
    let pokeColor = await Promise.all(URLs.map(url => axios.get(url.replace("pokemon", "pokemon-species"))
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
}

let dataLength = 0
async function pokeAPIbase() {
    dataLength = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1`).then(res => res.data.count)
    return dataLength
}

async function pokeAPIsearch(serach = '') {
    let pokedexArr = []
    let filterLength = 0
    if (serach === '') {
        filterLength = dataLength
        pokedexArr = await pokeAPIpage(0)
    } else {
        let URLs = []
        let pokeBaseSearch = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${dataLength}`).then(res => res.data.results)
        let filtred = pokeBaseSearch.filter(({ name }) => name.toLocaleLowerCase().includes(serach.toLocaleLowerCase()))
        filterLength = filtred.length

        if (filtred.length === 0) { pokedexArr = "Não encontrado"; filterLength = 0 }
        else {
            filtred.forEach(item => {
                let url = item.url;
                if (URLs.length <= 11 && url.length < 39) {
                    URLs.push(url)
                }
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
}

export {
    pokeAPIpage,
    pokeAPIsearch,
    pokeAPIbase
}
import '../CSS/Reset.css'
import "../CSS/scss/style.css"
import { v4 } from "uuid"
import ClipLoader from "react-spinners/ClipLoader";

function Corpo({
    dataProp = ''
}) {
    function imprime({color, id, image, titulo, types}) {
      color = color === "white"? "rgb(248, 185, 48)" : color
      color = color === "red"? "rgb(255, 105, 105)" : color
      color = color === "blue"? "rgb(68, 205, 255)" : color
      color = color === "green"? "rgb(44, 225, 176)" : color 
      color = color === "yellow"? "rgb(248, 185, 48)" : color 
        
      return (
            <div key={id} style={{backgroundColor:color}} className="principal__cartao">
                <img src={image} className="principal__cartao__image"></img>
                <div className="principal__cartao__conteudo">
                    <p className="principal__cartao__titulo">{titulo[0].toUpperCase() + titulo.substr(1)}</p>
                    <div className="principal__cartao__caracteristica">
                        {types.map(type => {return <p key={v4()} className="principal__cartao__caracteristica__cada">{type.type.name[0].toUpperCase() + type.type.name.substr(1)}</p>})}
                    </div>
                    <p className="principal__cartao__id">#{id.toString().padStart(3, '0')}</p>
                </div>
            </div>
        )
    }
    console.log(dataProp)
    if (dataProp.length === 0 || dataProp.length === "") { return <div> <ClipLoader /></div> }
    return (
        <main className='principal'>
            {dataProp.map(cartao => imprime(cartao))}
        </main>
    )
}
export { Corpo }
































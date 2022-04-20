import '../CSS/Reset.css'
import image from "../IMG/doguito.svg";
import "../CSS/scss/style.css"
import ClipLoader from "react-spinners/ClipLoader";

function Corpo({
    dataProp = ''
}) {



    if (dataProp.length === 0) { return <div> <ClipLoader/></div> }
    return (
        <main className='principal'>
            {dataProp.map((cartao,i) => {
                if(i<=12){(
                <div key={cartao.id} className="principal__cartao">
                    <img src={image} className="principal__cartao__image"></img>
                    <div className="principal__cartao__conteudo">
                        <p className="principal__cartao__titulo">{cartao.titulo}</p>
                        <div className="principal__cartao__caracteristica">
                            <p className="principal__cartao__caracteristica__cada" > {cartao.caracteristica1}</p>
                            <p className="principal__cartao__caracteristica__cada" > {cartao.caracteristica2}</p>
                        </div>
                        <p className="principal__cartao__id">{cartao.id}</p>
                    </div>
                </div>
            )}})}
        </main>
    )
}
export { Corpo }

































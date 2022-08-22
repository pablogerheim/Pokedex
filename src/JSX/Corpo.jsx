import '../CSS/Reset.css'
import "../CSS/scss/style.css"
import { v4 } from "uuid"
import ClipLoader from "react-spinners/ClipLoader"

function Corpo({
    dataProp = ''
}) {
    if (dataProp === {}) { return (
    <div className='principal'>
      <h1 > Request failed with status code 404</h1>
    </div>)
  }
      function imprime({ color, id, image, titulo, types }, i) {
        function bk_p() {
          color =
            dataProp[i].color === "white"
              ? "rgb(237, 224, 81)"
              : dataProp[i].color;
          color = color === "red" ? "rgb(255, 135, 135)" : color;
          color = color === "blue" ? "rgb(156, 227, 255)" : color;
          color = color === "green" ? "rgb(162, 241, 192)" : color;
          color = color === "yellow" ? "rgb(255, 239, 67)" : color;
          color = color === "purple" ? "rgb(167, 90, 195)" : color;
          color = color === "brown" ? "rgb(205, 150, 92)" : color;
          color = color === "gray" ? "rgb(218, 218, 218)" : color;
          color = color === "pink" ? "rgb(221, 125, 195)" : color;
          color = color === "black" ? "rgb(57, 48, 48)" : color;
          return color;
        }

        function bk_div() {
          color = color === "white" ? "rgb(248, 185, 48)" : color;
          color = color === "red" ? "rgb(255, 105, 105)" : color;
          color = color === "blue" ? "rgb(68, 205, 255)" : color;
          color = color === "green" ? "rgb(44, 225, 176)" : color;
          color = color === "yellow" ? "rgb(248, 185, 48)" : color;
          color = color === "purple" ? "rgb(208, 105, 248)" : color;
          color = color === "brown" ? "rgb(134, 97, 60)" : color;
          color = color === "gray" ? "rgb(183, 178, 168)" : color;
          color = color === "pink" ? "rgb(255, 201, 241)" : color;
          color = color === "black" ? "rgb(0, 0, 0)" : color;
          return color;
        }

        return (
          <div
            key={v4()}
            style={{ backgroundColor: bk_div() }}
            className="principal__cartao"
          >
            <img
              src={image}
              alt="imagem do Cartao"
              className="principal__cartao__image"
            ></img>
            <div className="principal__cartao__conteudo">
              <p className="principal__cartao__titulo">
                {titulo[0].toUpperCase() + titulo.substr(1)}
              </p>
              <div className="principal__cartao__caracteristica">
                {types.map((type) => {
                  return (
                    <p
                      key={v4()}
                      style={{ backgroundColor: bk_p() }}
                      className="principal__cartao__caracteristica__cada"
                    >
                      {type.type.name[0].toUpperCase() +
                        type.type.name.substr(1)}
                    </p>
                  );
                })}
              </div>
              <p className="principal__cartao__id">
                #{id.toString().padStart(3, "0")}
              </p>
            </div>
          </div>
        );
      }
    if(dataProp === "Não encontrado"){return <div className='clipLoader'> Não encontrado</div> }
    if (dataProp.length === 0 || dataProp.length === "") { return <div className='clipLoader'> <ClipLoader /></div> }
    return (
        <main className='principal'>
            {dataProp.map((cartao,i) => imprime(cartao,i))}
        </main>
    )
}
export { Corpo }

































import './cards.css'
function SubCards(props) {
    const { nombre, Ocupacion } = props;
  return (
  
    <div id="container">


    <div className="card">
        <img className="card_img" src="https://res.cloudinary.com/alex4191/image/upload/v1683357514/cat_f6ktqr.jpg" alt="Lago di Braies"/>
    <div className="card__details">
        <span className="tag">{Ocupacion}</span>
    <div className="name">{nombre}</div>
        <p>Catedraticos que conforman el proyecto de Redes 2.</p>

        <button>Read more</button>
    </div>

        </div>
    </div>
  
  )
}

export default SubCards
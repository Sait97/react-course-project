import { Link } from "react-router-dom";

const NewWatchCard = ({
    watch
}) => {
    return (
        <div className="card watchCard" >
            <img src={watch.imageUrl} className="card-img-top" alt="..."/>
            <div className ="card-body">
            <h5 className ="card-title">{watch.brand}</h5>
            <h3 className ="card-title">{watch.title}</h3>
            <div className="d-flex justify-content-around">
            <p className="cardPrice">$ {watch.price} </p>
            <Link to={`/details/${watch._id}`} className ="btn btn-style">Details</Link>
            </div>
            </div>
        </div>
    )
}


export default NewWatchCard;
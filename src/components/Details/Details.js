import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import './Details.css';
import { AuthContext } from "../../contexts/AuthContext";
import * as watchService from '../../services/watchSercices';
import { Link } from "react-router-dom";


const Details = () => {
    const navigate = useNavigate()
    const [watch, setWatch] = useState({});
    const { user } = useContext(AuthContext);
    const { watchId} = useParams();
   
    useEffect(() => {
          watchService.getOne(watchId)
            .then(watchResult => {
                setWatch(watchResult);
            })
    }, [watchId])

    const deleteHandler = (e) => {
        e.preventDefault();

        watchService.destroy(watchId, user.accessToken)
            .then(() => {
                navigate('/watches');
            });
    }
    const ownerBtn = (
        <div className="mt-3 mb-3">
            <Link className="ditails-page-btn" to={`/edit/${watch._id}`}>Edit</Link>
            <a className="ditails-page-btn" href="#" onClick={deleteHandler} >Delete</a>
        </div>
    )
    const userBtn =  <button className="ditails-page-btn">Add reviews</button>
    return(
    <section id="details" className="">
        <div className="container">
  
          <header className="section-header">
            <h3 className="section-title">Details Product</h3>
          </header>
  
        <div className="row d-flex">
            <div className="col-6">
                <img className="w-100" alt="watch" src={watch.imageUrl} />
            </div>
            <div className="col-6 details-info mt-4 ">
                <h2 className="mt-3 mb-3">{watch.title}</h2>
                <div className="d-flex mt-3 mb-3 details-reviews">
                    <div className="mr-4 mt-3">
                        <i className="fa fa-star " />
                        <i className="fa fa-star " />
                        <i className="fa fa-star " />
                        <i className="fa fa-star " />
                        <i className="fa fa-star " />
                    </div>
                    <p  className="mr-4 mt-3">Rewiews</p>
                   
                </div>
                <div className="mt-3 mb-3">
                    <h4>Brand: <span className="orange-color">{watch.brand}</span></h4>
                </div>
                <div className="mt-3 mb-3">
                    <h3>Guarantee: <span className="orange-color"> {watch.guarantee}</span> Year </h3>
                </div>
               
                <div className="mt-3 mb-3">
                    <button className="ditails-page-btn">Add to Wishlist</button>
                    <button className="ditails-page-btn">Add to Cart</button>
                </div>
                <div className="mt-3 mb-3">
                    <h3>Price:  </h3>
                        <div className="price orange-color" >$ {watch.price}</div>
                </div>
                {user._id && (user._id === watch._id
                    ? ownerBtn
                    : userBtn
                    )}
                <div className="mt-3 mb-3">
                    <Link className="ditails-page-btn" to={`/edit/${watch._id}`}>Edit</Link>
                    <a className="ditails-page-btn" href="#" onClick={deleteHandler} >Delete</a>
                </div>
                
            </div>
            <div className="row mt-5 row-descriptions">
                <div className="col-12">
                    <div className="mt-3 mb-3">
                        <h3>Description </h3>
                        <p>{watch.description}</p>
                    </div>
                </div>
            </div>

        </div>
         
  
        </div>
    </section>
    );
};



export default Details;
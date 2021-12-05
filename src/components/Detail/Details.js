import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import './Details.css';
import { AuthContext } from "../../contexts/AuthContext";
import * as watchService from '../../services/watchSercices';


const Details = () => {
    const [watch, setWatch] = useState({});
    const { user } = useContext(AuthContext);
    const { watchId} = useParams();
    

    useEffect(() => {
          watchService.getOne(watchId)
            .then(watchResult => {
                console.log("watchResult");
                console.log( watchResult);
                setWatch(watchResult);
            })
    }, [watchId])

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
                <div className="d-flex mt-3 mb-3 justify-content-start">
                    <div>
                        <i className="fa fa-star " />
                        <i className="fa fa-star " />
                        <i className="fa fa-star " />
                        <i className="fa fa-star " />
                        <i className="fa fa-star " />
                    </div>
                    <p>Rewiews</p>
                    <button>Add reviews</button>
                </div>
                <div className="mt-3 mb-3">
                    <h4>Brand: <span>{watch.brand}</span></h4>
                </div>
                <div className="mt-3 mb-3">
                    <h3>Guarantee: <span>{watch.guarantee}</span> Year </h3>
                </div>
                <div className="mt-3 mb-3">
                    <h3>Price: $ <span>{watch.price}</span></h3>
                </div>
                <div className="mt-3 mb-3">
                    <button>Add to Wishlist</button>
                    <button>Add to Cart</button>
                </div>
                <div className="mt-3 mb-3">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                <div className="mt-3 mb-3">
                    <h5>Description: </h5>
                    <p>{watch.description}</p>
                </div>
            </div>

        </div>
         
  
        </div>
    </section>
    );
};



export default Details;
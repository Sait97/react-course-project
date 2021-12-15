import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import './Details.css';
import { useAuthContext } from "../../contexts/AuthContext";
import * as watchService from '../../services/watchSercices';
import * as likeService from '../../services/likeServices';




const Details = () => {
    const navigate = useNavigate()
    const { user , setUser} = useAuthContext();
    const { watchId} = useParams();
    const [watch, setWatch] = useState({});
  
    
    useEffect(() => {
          watchService.getOne(watchId)
            .then(watchResult => {
                setWatch(watchResult);
            })
    }, [watchId]);

    useEffect(() => {
        likeService.getWatchLikes(watchId)
          .then(likes => {
            setWatch(state => ({...state, likes}));
          })
  }, [])

    const deleteHandler = (e) => {
        e.preventDefault();

        watchService.destroy(watchId, user.accessToken)
            .then(() => {
                navigate('/watches');
            });
    }

    const likeBtn = () => { 
        if(user._id === watch._ownerId){
            return;
        }
        // Remobe Coments 
        // if(watch.likes.includes(user._id)){
        //     return;
        // }

        likeService.like(user._id, watchId)
            .then(() => {
                
                setWatch(state => ({...state, likes: [...state.likes, user._id]}));
            });
    }
    const addToWishlistBtn = async() => {
        
        let wishlist = [...user.wishlist, user._id];
        let addtoWishlist = {...user, wishlist};

        watchService.wishlist(user._id, addtoWishlist, user.accessToken)
            .then((resData) => {
                setUser(state => ({
                    ...state,
                    wishlist,
                }));
            });
    }
    const ownerBtn = (
        <>
       
        <div className="mt-3 mb-3 d-flex">
            <div className="d-flex mr-4 likesIcon">
                <i className="orange-color fa fa-heart " />
            </div>
            <span className="mr-4 likes-text">{watch.likes?.length || 0} Likes</span>
        </div>
        <div className="mt-3 mb-3 d-flex">
            <Link className="ditails-page-btn" to={`/edit/${watch._id}`}>Edit</Link>
            <a className="ditails-page-btn" href="#" onClick={deleteHandler} >Delete</a>
        </div>
        </>
    )

    const userBtn =  (
        <>
            <div className="mt-3 mb-3 d-flex mr-4 likesIcon">
                <i className="orange-color fa fa-heart " />
                <span className="mr-4 likes-text">{watch.likes?.length || 0} Likes</span>
                <button onClick={likeBtn} className="ditails-page-btn">Like</button>
            </div>
        </>
        )


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
                    <button className="ditails-page-btn">Add reviews</button>
                </div>
                <div className="mt-3 mb-3">
                    <h4>Brand: <span className="orange-color">{watch.brand}</span></h4>
                </div>
                <div className="mt-3 mb-3">
                    <h3>Guarantee: <span className="orange-color"> {watch.guarantee}</span> Year </h3>
                </div>
               <div className="mt-3 mb-3 d-flex">
                    <h3 className="mr-3 pt-2">Price:  </h3>
                        <span className="price orange-color" >$ {watch.price}</span>
                </div>
                <div className="mt-3 mb-3">
                    <Link  to="#" onClick={addToWishlistBtn} className="ditails-page-btn">Add to Wishlist</Link>
                    <button className="ditails-page-btn">Add to Cart</button>
                </div>
                
                <div className="mt-3 mb-3">
                    {user._id && (user._id == watch._ownerId
                        ? ownerBtn
                        : userBtn    
                    )}
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
import { Link } from "react-router-dom"
import './Wishlist.css';


import {  useState } from "react";

// import { useAuthContext } from "../../contexts/AuthContext";

// import * as likeService from '../../services/likeServices';

const Wishlist = () => {

  const [watch] = useState({});
 
  console.log(watch);
//   useEffect(() => {
//       likeService.getWishlist(user.wishlist)
//         .then(wishlist => {
//           console.log(user.wishlist);
//           setWatch(state => {
//               console.log(...state);});
//           // setWatch(state => ({...state, wishlist}));
//         })
// }, [])
 
    return(
        <section id="wishlist" className="">
        <div className="container">
  
          <header className="section-header">
            <h3 className="section-title">Wishlist</h3>
          </header>
  
          <div className="row">
            <div className="col-12">
              <table className="wishlist-table">
                  <thead>
                      <tr>
                          <th>remove</th>
                          <th>images</th>
                          <th>product</th>
                          <th>unit price</th>
                          <th>add to cart</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>
                            <Link to="#"><i className="fa fa-times" /></Link>
                          </td>
                          <td>
                            <Link to="#"><img src="#" alt="watch"/></Link>
                          </td>
                          <td>
                            <Link to="#">{watch.title}</Link>
                          </td>
                          <td>
                            <Link to="#">Price</Link>
                          </td>
                          <td>
                            <Link to="#" className="ditails-page-btn" >Add To Cart</Link>
                          </td>
                      </tr>
                  </tbody>
              </table>
            </div>
          </div>
  
        </div>
      </section>
    )
};

export default Wishlist;
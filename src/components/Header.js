
import { useAuthContext } from "../contexts/AuthContext";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


// import * as likeService from '../services/likeServices';
const Header = () => {
    const { user } = useAuthContext();
//     const { watchId} = useParams();
//     const [watch, setWatch] = useState({});
   
//     useEffect(() => {
//         likeService.getWishlist(watchId)
//           .then(wishlist => {
//             setWatch(state => ({...state, wishlist}));
//           })
//   }, [])
   

    let guestNavigation = (
        <ul>
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/watches">Watches</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>    
        </ul>
)
let userNavigation = (
    <ul>
        <li className="active"><Link to="/">Home</Link></li>
        <li><Link to="/watches">Watches</Link></li>
        <li><Link to="/add-watch">Add Watch</Link></li>
        <li><Link to="/my-profile">Welcome, <span className="orange-color">{user.email}</span></Link></li> 
        <li><Link to="/logout">Logout</Link></li>
</ul>
)


    return (

    <header id="header" >
        <div className="fixed-top row0">
            <div className="container d-flex">

                <div className="social-links  d-flex col-4">
                   
                    <a href="https://www.facebook.com/aBs0Lu.7/" className="facebook"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/abs0lu.7/" className="instagram"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/sait-chaush?fbclid=IwAR2DAp51EB_IgPy_LFMLZkdKpuiN19pxmJECLQ-n-BWzEndPRP-cv6HBmgA" className="google-plus"><i className="fa fa-google-plus"></i></a>
                    <a href="https://www.linkedin.com/in/sait-chaush?fbclid=IwAR2DAp51EB_IgPy_LFMLZkdKpuiN19pxmJECLQ-n-BWzEndPRP-cv6HBmgA" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>

                <div className="logo d-flex col-6">

                    <h1 className="text-light"><a href="header"><span>Lu<span className="orange-color">xo</span>ry Wa<span className="orange-color">tch</span>es</span></a></h1>
                    <a href="/" className="scrollto"><img src="img/logo.png" alt="" className="img-fluid" /></a>
                </div>

                <div className="card-links d-flex col-2">
                <ul className="main-nav  d-flex">
                    <li>

                    <Link to="/wishlist" className="bordered-icon"><i className="fa fa-heart"></i></Link>
                    </li>
                    <li>
                    <div className="d-flex ">
                        <a className="mini-cart__dropdown-toggle bordered-icon d-flex" id="cartDropdown">
                        <span className="mini-cart__count">0</span>
                            <i className="ion-ios-cart-outline mini-cart__icon"></i>
                        <span className="mini-cart__ammount">80.00</span>
                         {/* <i className="fa fa-angle-down absolute orange-color"></i> */}
                        </a>
                    </div>
                        </li>
                </ul>
                </div>
               

            </div>
        </div>
        <div className="fixed-top-2 row1">
            <div className="container d-flex justify-content-center">
                <nav className="main-nav  d-none d-lg-block">
                   {user.email
                      ? userNavigation
                      : guestNavigation
                   }

                </nav>

            </div>
        </div>
    </header>
    );
}

export default Header;
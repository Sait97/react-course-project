import { Link } from "react-router-dom";

const Header = () => {
    return (

    <header id="header" >
        <div className="fixed-top row0">
            <div className="container d-flex">

                <div className="social-links  d-flex col-4">
                   
                    <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                    <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                    <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>

                <div className="logo d-flex col-6">

                    <h1 className="text-light"><a href="#header"><span>Lu<span className="orange-color">xo</span>ry Wa<span className="orange-color">tch</span>es</span></a></h1>
                    <a href="#intro" className="scrollto"><img src="img/logo.png" alt="" className="img-fluid" /></a>
                </div>

                <div className="card-links d-flex col-2">
                <ul className="main-nav  d-flex">
                    <li>

                    <a href="" className="bordered-icon"><i className="fa fa-heart"></i></a>
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
                    <ul>
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/watches">Watches</Link></li>
                        <li><Link to="#about">Add Watch</Link></li>
                        <li><Link to="#about">About Us</Link></li>
                        <li><Link to="#services">Services</Link></li>
                        <li><Link to="#contact">Contact Us</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>

            </div>
        </div>
    </header>
    );
}

export default Header;
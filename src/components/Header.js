

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
                            <i class="ion-ios-cart-outline mini-cart__icon"></i>
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
                        <li className="active"><a href="#intro">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#team">Team</a></li>
                        <li className="drop-down"><a href="">Drop Down</a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                            </ul>
                        </li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>

            </div>
        </div>
    </header>
    );
}

export default Header;
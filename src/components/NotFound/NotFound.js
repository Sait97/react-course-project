import { Link } from "react-router-dom"
import './NotFound.css';

const NotFound = () => {
    return(
        <section id="not-found" >
        <div className="container">
  
          <header className="section-header pb-5">
            <h1 className="section-title">404</h1>
            <h2 className="section-title">opps! page not be found</h2>
            <p>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.</p>

            <Link to='/' className="ditails-page-btn mb-5">Back To Home Page</Link>
          </header>
  
       
  
        </div>
    </section>
    )
};

export default NotFound;
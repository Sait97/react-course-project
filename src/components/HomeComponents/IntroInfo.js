import { Link } from "react-router-dom";


const IntroInfo = () => {
    return (
        <section id="intro" className="clearfix">
        <div className="container"> </div>
    
          
          <div className="intro-info">
            <h2>We provide<br/><span>Quality</span><br/>Watches!</h2>
            <div>
              <Link to="/watches" className="btn-get-started scrollto">SHOP NOW</Link>
             
            </div>
          </div>
        
      </section>
    );
}

export default IntroInfo;
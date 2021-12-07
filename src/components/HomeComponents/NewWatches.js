import { useEffect, useState } from "react";
import NewWatchCard from "./NewWatchCard";
import * as watchService from '../../services/watchSercices';


const NewWatches = () => {

    const [watches, setWatches] = useState([]);

    useEffect(() => {
      watchService.getAll()
        .then(result => {
           setWatches(result);
        })
    }, []);

    return (
        <section id="services" className="section-bg">
        <div className="container">
  
          <header className="section-header">
            <h3>Best Products</h3>
            <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
          </header>
  
          <div className="row">
            {watches.length > 0}
               {  watches.map (x =>  <NewWatchCard key={x._id} watch={x} /> )}
                 <p> No Watches in database!</p>
              
           
            {/* <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
              <div className="box">
                <div className="icon"><i className="ion-ios-analytics-outline" style={{color: '#ff689b'}}></i></div>
                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div> */}
            
        
          </div>
  
        </div>
      </section>
    );
}


export default NewWatches;
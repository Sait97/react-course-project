import { useEffect, useState } from "react";
import './Watches.css'
import NewWatchCard from "../HomeComponents/NewWatchCard";
import * as watchService from '../../services/watchSercices';


const Watches = () => {
    const [watches, setWatches] = useState([]);

    useEffect(() => {
      watchService.getAll()
        .then(result => {
           setWatches(result);
        })
    }, []);

    return (
        <section id="watches" className="">
        <div className="container">
  
          <header className="section-header">
            <h3 className="section-title">Watches</h3>
          </header>
  
          <div className="row">
            <div className="col-lg-12">
              <ul id="watches-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">Mens</li>
                <li data-filter=".filter-card">Ladies</li>
                <li data-filter=".filter-web">Best Sellers</li>
              </ul>
            </div>
          </div>
  
          <div className="row portfolio-container">
          {watches.length > 0

?  (
  watches.map (x =>  <NewWatchCard key={x._id} watch={x} /> )
) 
: <p className="no-data-info"> No Watches in database!</p>        
} 
          </div>
        </div>
      </section>
    )
}

export default Watches;
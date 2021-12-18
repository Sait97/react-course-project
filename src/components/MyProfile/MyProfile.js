import './MyProfile.css';

import { useEffect, useState } from "react";
import NewWatchCard from "../HomeComponents/NewWatchCard";
import * as watchService from '../../services/watchSercices';
import { useAuthContext } from '../../contexts/AuthContext';


const MyProfile = () => {
    const [watches, setWatches] = useState([]);
    const {user } = useAuthContext();
    useEffect(() => {
      watchService.getMyWatches(user._id)
        .then(result => {
           setWatches(result);
        })
    }, [user._id]);

    return (
        <section id="MyProfile" className="">
        <div className="container">
  
          <header className="section-header">
            <h3 className="section-title">My Profile</h3>
          </header>
          <div className="row portfolio-container">
          {watches.length > 0
              ?  (
                watches.map (x =>  <NewWatchCard key={x._id} watch={x} /> )
              ) 
              : <p className="no-data-info">You dont have watches yet!</p>        
            }
          </div>
        </div>
      </section>
    )
}

export default MyProfile;
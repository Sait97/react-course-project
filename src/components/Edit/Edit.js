import { useParams} from 'react-router-dom'
import { useState , useEffect, useContext} from 'react';
import * as watchService from '../../services/watchSercices';
import { AuthContext } from '../../contexts/AuthContext';

import { useNavigate } from "react-router-dom";
import './Edit.css'


const Edit = () => {
    const { watchId } = useParams();
    const [watch, setWatch] = useState(watchId);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
   
    useEffect(() => {
        watchService.getOne(watchId)
            .then(watchResult => {
                setWatch(watchResult);
            })
    }, [watchId]);
  

    const editHandler = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let brand = formData.get('brand');
        let imageUrl = formData.get('imageUrl');
        let description = formData.get('description');
        let guarantee = formData.get('guarantee');
        let price = formData.get('price');

        let updatedWatch = {
            title,
            brand,
            imageUrl,
            description,
            guarantee,
            price,
            _id: watchId
        }
        
        await watchService.update(updatedWatch , watchId, user.accessToken)
           
        navigate('/watches');
           
    }

    return (
        <div id="edit-page">
        <div className="d-flex justify-content-start">
            <h2 className="mb-5">Edit</h2>
        </div>
    <section className="login-form">
        
        <form className="form" method="POST" onSubmit={editHandler} >
            <fieldset>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title" defaultValue={watch.title}  id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="brand" className="form-label">Brand</label>
                    <input type="text" name="brand" defaultValue={watch.brand}  id="brand" />
                </div>
                <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">Image</label>
                    <input type="text" name="imageUrl" defaultValue={watch.imageUrl} id="imageUrl" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" name="description" defaultValue={watch.description} id="description" />
                </div>
                <div className="mb-3">
                    <label htmlFor="guarantee" className="form-label">Guarantee</label>
                    <input type="number" name="guarantee" defaultValue={watch.guarantee} id="guarantee"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" name="price" defaultValue={watch.price} id="price"/>
                </div>
                
            
                <button type="submit" className="btn btn-style">edit</button>
            </fieldset>
        </form>
    
  </section>
  </div>
    )
}

export default Edit;

import { useNavigate } from "react-router-dom";
import * as watchServices from "../services/watchSercices";
import { useAuthContext } from "../contexts/AuthContext";

import { useNotificationContext , types} from "../contexts/NotificationContext";

const Create = () => {

    const { user } = useAuthContext();
    const navigate = useNavigate();
    const { addNotification } = useNotificationContext();
    const onCreate = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let brand = formData.get('brand');
        let imageUrl = formData.get('imageUrl');
        let description = formData.get('description');
        let guarantee = formData.get('guarantee');
        let price = formData.get('price');

        if(title.trim() === ''){
            return addNotification('Title is required', types.danger)
        }
        if(title.length < 3){
            return addNotification('Title must be at least 3 character long!', types.danger)
        }
        if(brand.trim() === ''){
            return addNotification('Brand is required', types.danger)
        }
        if(brand.length < 3){
            return addNotification('Brand must be at least 3 character long!', types.danger)
        }
        if(imageUrl.trim() === ''){
            return addNotification('ImageUrl is required', types.danger)
        }
        if(description.trim() === ''){
            return addNotification('Description is required', types.danger)
        }
        if(description.length < 10){
            return addNotification('Description must be at least 10 character long!', types.danger)
        }
        if(guarantee.trim() === ''){
            return addNotification('Guarantee is required', types.danger)
        }
        if(price.trim() === ''){
            return addNotification('Price is required', types.danger)
        }

        let watchItem = {
            title,
            brand,
            imageUrl,
            description,
            guarantee,
            price
        }
        watchServices.create(watchItem, user.accessToken)
            .then(result => {
                addNotification('You add watch successfully', types.success)
                navigate('/watches');
            })
            .catch(err => {
                addNotification('Something went wrong! ', types.danger)
                console.log(err);
            })
    }



    return (
        <div id="create-page">
        <div className="d-flex justify-content-start">
            <h2 className="mb-5">Add Watch</h2>
        </div>
    <section className="login-form">
        
        <form className="form" onSubmit={onCreate} method="POST">
            <fieldset>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title"  id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="brand" className="form-label">Brand</label>
                    <input type="text" name="brand"  id="brand" />
                </div>
                <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">Image</label>
                    <input type="text" name="imageUrl"  id="imageUrl" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" name="description"  id="description" />
                </div>
                <div className="mb-3">
                    <label htmlFor="guarantee" className="form-label">Guarantee</label>
                    <input type="number" name="guarantee" id="guarantee"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" name="price" id="price"/>
                </div>
                
            
                <button type="submit" className="btn btn-style">create</button>
            </fieldset>
        </form>
    
  </section>
  </div>
    )
}

export default Create;
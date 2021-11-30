


const Create = () => {
    return (
        <div id="create-page">
        <div className="d-flex justify-content-start">
            <h2 className="mb-5">Add Watch</h2>
        </div>
    <section className="login-form">
        
        <form className="form">
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
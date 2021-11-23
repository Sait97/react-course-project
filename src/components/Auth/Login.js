



const Login = () => {
    return (
        <div id="login-page">
            <div className="d-flex justify-content-start">
                <h2 className="mb-5">LOGIN</h2>
            </div>
        <section className="login-form">
            
            <form className="form">
                <fieldset>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password"  id="exampleInputPassword1"/>
                    </div>
                
                    <button type="submit" className="btn btn-style">login</button>
                </fieldset>
            </form>
        
      </section>
      </div>
    );
}

export default Login;
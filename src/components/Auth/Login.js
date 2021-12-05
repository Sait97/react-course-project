
import { useContext } from "react";
import { useNavigate } from "react-router";

import * as authService from '../../services/authService';
import { AuthContext } from "../../contexts/AuthContext";



const Login = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');
    
        authService.login(email, password)
            .then((authData) => {
                login(authData);

                navigate('/');

            })
            .catch(err => {
                console.log(err);
            })

    }
    
    return (
        <div id="login-page">
            <div className="d-flex justify-content-start">
                <h2 className="mb-5">LOGIN</h2>
            </div>
        <section className="login-form">
            
            <form className="form" method="POST" onSubmit={onLogin}>
                <fieldset>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email"  name="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password"  id="exampleInputPassword1"/>
                    </div>
                
                    <button type="submit" className="btn btn-style">login</button>
                </fieldset>
            </form>
        
      </section>
      </div>
    );
}

export default Login;
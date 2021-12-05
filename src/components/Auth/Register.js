import { useContext } from "react";
import { useNavigate } from "react-router";

import * as authService from '../../services/authService';
import { AuthContext } from "../../contexts/AuthContext";


const Register = () => {

    const navigate = useNavigate();
    const  { login } = useContext(AuthContext);

    const registerHandler = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)
            .then(authData => {
                login(authData);

                navigate('/');
            });
    }


    return (
        <div id="register-page">
            <div className="d-flex justify-content-start">
                <h2 className="mb-5">register</h2>
            </div>
        <section className="login-form">
            
            <form className="form" method="POST" onSubmit={registerHandler}>
                <fieldset>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" name="firstName"  id="firstName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" name="lastName"  id="lastName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email"  id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputRePassword1" className="form-label">Repeat Password</label>
                        <input type="password" name="rePassword"  id="exampleInputRePassword1"/>
                    </div>
                
                    <button type="submit" className="btn btn-style">register</button>
                </fieldset>
            </form>
        
      </section>
      </div>
    );
}

export default Register;
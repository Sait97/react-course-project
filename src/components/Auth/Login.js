
import { useNavigate } from "react-router";

import * as authService from '../../services/authService';
import { useAuthContext } from "../../contexts/AuthContext";
import { useNotificationContext , types} from "../../contexts/NotificationContext";


const Login = () => {

    const { login } = useAuthContext();
    const navigate = useNavigate();
    const { addNotification } = useNotificationContext();
    const onLogin = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        addNotification('You logged in successfully')
        let email = formData.get('email');
        let password = formData.get('password');
       
        if(email.trim() === ''){
            return addNotification('Email is required')
        }
        if(password.trim() === ''){
            return addNotification('Password is required')
        }
        if(password.length < 3){
           return addNotification('Password must be at least 3 character long!', types.danger)
        }
        authService.login(email, password)
            .then((authData) => {
                login(authData);
                addNotification('You logged in successfully', types.success)
                navigate('/');

            })
            .catch(err => {
                addNotification('Email or Password don`t match!', types.danger)
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

import { useNavigate } from "react-router";

import * as authService from '../../services/authService';
import { useAuthContext } from "../../contexts/AuthContext";
import { useNotificationContext , types} from "../../contexts/NotificationContext";


const Register = () => {

    const navigate = useNavigate();
    const  { login } = useAuthContext();
    const { addNotification } = useNotificationContext();

    const registerHandler = (e) => {
        e.preventDefault();

        

        let formData = new FormData(e.currentTarget);

        let firstName = formData.get('firstName');
        let lastName = formData.get('lastName');
        let email = formData.get('email');
        let password = formData.get('password');
        let rePassword = formData.get('rePassword');

        if(firstName.trim() === ''){
            return addNotification('FirstName is required', types.danger)
        }
        if(firstName.length < 3){
            return addNotification('Password must be at least 3 character long!', types.danger)
         }
        if(lastName.trim() === ''){
            return addNotification('FirstName is required', types.danger)
        }
        if(lastName.length < 3){
            return addNotification('Password must be at least 3 character long!', types.danger)
         }
        if(email.trim() === ''){
            return addNotification('Email is required', types.danger)
        }
        if(password.trim() === ''){
            return addNotification('Password is required', types.danger)
        }
        if(password.length < 3){
            return addNotification('Password must be at least 3 character long!', types.danger)
         }
        if(password !== rePassword){
            return addNotification('Password`s das not match!', types.danger)
        }
        
        let userData = {
            firstName,
            lastName,
            email,
            password,
            rePassword,
        }
       
        authService.register(userData)
            .then(authData => {
                login(authData);
                addNotification('You register was successfully', types.success)
                navigate('/');
            })
            .catch(err => {
                addNotification('Something went wrong!', types.danger)
                console.log(err);
            })
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
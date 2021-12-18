import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import {useEffect } from 'react';
import { useNotificationContext , types} from "../../contexts/NotificationContext";

const Logout = () => {
    const navigate = useNavigate();
    const { addNotification } = useNotificationContext();
    const { user, logout } = useAuthContext();

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
              
                navigate('/');
            })
            .catch(err => {
                addNotification('Something whent wrong!', types.danger)
                console.log(err);
            })
    }, [useAuthContext, useNotificationContext])

    return null;
};

export default Logout;
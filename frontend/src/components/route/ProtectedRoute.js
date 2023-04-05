import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Loader from '../layouts/Loader';

export default function ProtectedRoute ({children, isAdmin}) {
    const { isAuthenticated, loading, user } = useSelector(state => state.authState)
    const navigate = useNavigate();

    if(!isAuthenticated && !loading) {
        return  navigate("/login" )
    }

    if(isAuthenticated) {
        if(isAdmin === true  && user.role !== 'admin') {
            return  navigate("/" )
        }
        return children;
    }

    if(loading) {
        return <Loader/>
    }

   
}
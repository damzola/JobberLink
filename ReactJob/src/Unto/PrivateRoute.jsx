
import { Navigate, Outlet } from "react-router-dom"
import swal from "sweetalert"



const PrivateRoute = () => {
    let auth = localStorage.getItem("auth_token")
    if(!auth){
        return(
            swal("Warning", "You Have To SignIn"),
            <Navigate to="/Signin" />

        )


    }else{
        return(
            
            <Outlet/>
        )
    }

}

export default PrivateRoute

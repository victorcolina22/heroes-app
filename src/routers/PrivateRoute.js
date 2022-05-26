import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/authContext"


export const PrivateRoute = ({ children }) => {
    // "children" es el "DashboardRoutes" que contiene el resto de componentes que se le está pasando automáticamente 
    // a este componente.

    const { user } = useContext(AuthContext)

    // Se utiliza el "useLocation" para extraer el path en donde se está navegando y se inserta en el localstorage para siempre mantener el último path en donde
    // estuvo el usuario, así al hacer el logout se recuerde el último path y mejorar la experiencia de usuario.
    const { pathname, search } = useLocation();
    localStorage.setItem('lastpath', pathname + search);

    return user.logged
        ? children
        : <Navigate to="/login" />
}

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";


export const LoginScreen = () => {

    const { dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = () => {

        const action = {
            type: types.login,
            payload: { name: 'Victor' }
        }

        // Este "lastPath" se extrae del localstorage para enviar al usuario a la última ruta en el historial del navegador, esto es una mejora en la experiencia de 
        // usuario. Esto fue implementado en el PrivateRoute, es decir, solo recordará las rutas privadas de nuestra aplicación.
        const lastPath = localStorage.getItem('lastpath') || '/';

        dispatch(action);
        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

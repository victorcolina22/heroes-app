import { useEffect, useReducer } from "react"
import { AuthContext } from "./auth/authContext"
import { authReducer } from "./auth/authReducer"
import { AppRouter } from "./routers/AppRouter"


const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    // Acá el "useEffect" se está utilizando para 2 cosas, la primera es que al existir un usuario se inserta ese objeto en el "localStorage", y la segunda es que
    // cuando no existe el usuario también lo está guardando en el "localStorage", pero por qué? Porque si bien tenemos el condicional de que no haga nada cuando no
    // existe el usuario tenemos la función "init" en donde obtiene del "localStorage" el usuario si existe, y sino existe envía un objeto con el "logged: false",
    // y eso es el usuario en el "useReducer" y ese usuario es el que está implementando en el "localStorage".
    useEffect(() => {
        if (!user) return;
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])


    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}


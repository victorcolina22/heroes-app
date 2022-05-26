import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />

                {/* El "/*" indica que todas las rutas dentro del componente "DashboardRoutes" heredan el "/" */}
                <Route path="/*" element={
                    // El "PrivateRoute" va a verificar si el usuario que ingresa del componente "LoginScreen" está
                    // autenticado, y así dará accesso a los componentes dentro del "DashboarRoutes".
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                } />

            </Routes>
        </BrowserRouter>
    );
};

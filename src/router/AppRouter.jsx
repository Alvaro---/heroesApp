import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes/routes/heroesroutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={
                    <PublicRouter>
                        <LoginPage />
                    </PublicRouter>
                } />

                {/* <Route path="/login/*" element={
                    <PublicRouter>
                        <Router>
                            <Route path="/*" element={<LoginPage />} />
                        </Router>
                    </PublicRouter>
                } /> */}

                {/* <Route path="/login" element={<LoginPage />} /> */}

                <Route path="*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />
                {/* <Route path="/*" element={<HeroesRoutes />} /> */}
            </Routes>
        </>
    );
};

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

    const { login } = useContext(AuthContext)

    const navigate = useNavigate();

    //Verificar si tuvo un last path
    const onLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';

        login('Alvaro Mercado');
        navigate(lastPath, {
            replace: true,
        });
    };
    return (
        <div className="container mt-5">
            <h1>login</h1>
            <hr />
            <button className="btn btn-primary" onClick={onLogin}>
                Login
            </button>
        </div>
    );
};
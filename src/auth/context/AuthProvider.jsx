import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"

// const initialSate = {
//     logged: false
// }

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user, // Si no existe al negar dara true y la doble dara false. 
        //Si  existe dara false y al negar doble dara true
        user,
    }
}

export const AuthProvider = ({ children }) => {
    // Si se usa el nit, no se neecsitaria el initialstate ya que el init dara el valor inicial
    const [authState, dispatch] = useReducer(authReducer, {}, init); // el initial state puede estar en un storage por si tiene algun token

    const login = (name = '') => {

        const user = {
            id: 'ABC',
            name: name
        }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user))

        dispatch(action)
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.logout,
        }
        dispatch(action);
    }

    return (

        // <AuthContext.Provider value={{authState, dispatch}}>
        // Esto puede ser, pero a veces no es bueno mandar todo el dispatch

        <AuthContext.Provider value={{ login, logout, ...authState }}>
            {/* Se puede destructurar si los nombres no se repiten */}
            {children}
        </AuthContext.Provider>
    )

}

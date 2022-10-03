import { types } from "../types/types";

// const initialSate = {
//     logged: false,
//     name: '',
// }
// export const authReducer = (state={initialSate}, action) => {
export const authReducer = (state = {}, action) => {
    // No deberia enviar nada a localStorage ni a console log. 
    // console log puede ser para probar, pero el reducer nod eberia tener ninguna cosa externa
    switch (action.type) {
        case types.login:
            return { //return state
                ...state, // Por si luego hay mas opciones, que no se borren
                logged: true,
                user: action.payload
            };
        case types.logout:
            return {
                ...state,
                logged: false,
                // name: null // o borrarlo
            };
        default:
            return state;
    }
}
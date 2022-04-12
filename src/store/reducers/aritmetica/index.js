import actionsTypes from "../../actionTypes/aritmetica";

const INITIAL_STATE = 1;
function aritmetica(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionsTypes.SOMAR:
            return state + action.payload;
        case actionsTypes.SUBTRAIR:
            return state - action.payload;
        case actionsTypes.MULTIPLICAR:
            return state * action.payload;
        case actionsTypes.DIVIDIR:
            return state / action.payload;
        default:
            return state;
    }
}

export default aritmetica;

import actionTypes from "../../actionTypes/aritmetica";

export function handleSomar(valor) {
    return {
        type: actionTypes.SOMAR,
        payload: valor,
    };
}

export function handleSubtrair(valor) {
    return {
        type: actionTypes.SUBTRAIR,
        payload: valor,
    };
}

export function handleMultiplicar(valor) {
    return {
        type: actionTypes.MULTIPLICAR,
        payload: valor,
    };
}

export function handleDividir(valor) {
    return {
        type: actionTypes.DIVIDIR,
        payload: valor,
    };
}

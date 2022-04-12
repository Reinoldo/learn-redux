import { useDispatch, Provider, useSelector } from "react-redux";
import {
    handleDividir,
    handleMultiplicar,
    handleSomar,
    handleSubtrair,
} from "./store/actions/aritmetica";
import store from "./store";

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

function App() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.ari);
    return (
        <div>
            <button onClick={() => dispatch(handleSomar(1))}>Somar</button>
            <button onClick={() => dispatch(handleSubtrair(1))}>Subtrair</button>
            <button onClick={() => dispatch(handleMultiplicar(2))}>MULTIPLICAR</button>
            <button onClick={() => dispatch(handleDividir(2))}>DIVIDIR</button>
            <h2>Counter {counter}</h2>
        </div>
    );
}

export default AppWrapper;

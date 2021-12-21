import { createContext } from 'react';
import { useReducer } from 'preact/hooks';
import { carReducer } from './reducer/car/carReducer';
import { resetCar, addItemCar } from './reducer/car/carActions';

export const CarContext = createContext({});
const { Provider } = CarContext;

export const CarProvider = ({ children }) => {

    const initialState = {
        carItems: 0,
        itemList: []
    }

    const [state, dispatch] = useReducer(carReducer,initialState)

    const startResetCar = ( )=>{
        dispatch(resetCar)
    }
    const startaddItemCar = ( item )=>{
        dispatch(addItemCar(item))
    }

    return (
        <Provider value={{
            state,
            startResetCar,
            startaddItemCar
        }}>           
            { children }           
        </Provider>
    )
}

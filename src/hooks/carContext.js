import { createContext } from 'react';
import { useReducer } from 'preact/hooks';
import { carReducer } from './reducer/car/carReducer';
import { resetCar, addItemCar } from './reducer/car/carActions';
import { fetApiSrv } from '../services';

export const CarContext = createContext({});
const { Provider } = CarContext;

export const CarProvider = ({ children }) => {

    const initialState = {
        count: 0
    }

    const [state, dispatch] = useReducer(carReducer,initialState)

    const startResetCar = ( )=>{
        dispatch(resetCar)
    }

    const startaddItemCar = async ( { id, colorCode, storageCode } )=>{
        try {   
            const {count} = await fetApiSrv.addProduct( {id, colorCode,storageCode})    
            console.log(count)
            dispatch(addItemCar(count))
        } catch (error) {
            console.log(error)
        }
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

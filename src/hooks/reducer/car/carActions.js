/*************************************
*         [PAGE]  ACTIONS            *
**************************************/
import { types } from "./types";

export const resetCar = (  )=>{
    return{
        type: types.resetCar
    }
}

export const addItemCar = ( count )=>{
    return{
        type: types.addItemCar,
        payload: {count}
    }
}





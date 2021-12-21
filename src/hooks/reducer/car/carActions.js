/*************************************
*         [PAGE]  ACTIONS            *
**************************************/
import { types } from "./types";

export const resetCar = (  )=>{
    return{
        type: types.resetCar
    }
}

export const addItemCar = ( item )=>{
    return{
        type: types.resetCar,
        payload: item
    }
}





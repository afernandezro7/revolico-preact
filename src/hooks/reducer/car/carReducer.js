import { types } from "./types";

const initialState = {
    carItems: 0,
    itemList: []
}


export const carReducer = (state, action) => {
    switch (action.type) {
        case types.resetCar: return initialState;
        case types.addItemCar: 
            return {
                ...state,
                carItems: state+1,
                itemList: [...state.itemList, action.payload]
            };
        default: return state;
    }
};

import {ActionType} from '../contans/action-type';

export const setProducts = (products) =>{
    return {
        type: ActionType.SET_PRODUCTS,
        payload : products 
    }
}


export const selectedProduct = (product) =>{
    return {
        type: ActionType.SELECTED_PRODUCTS,
        payload : product 
    }
}

export const removeProduct = () =>{
    return {
        type: ActionType.REMOVE_PRODUCTS 
    }
}



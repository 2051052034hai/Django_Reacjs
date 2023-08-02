import {ADD_CART, DELETE_CART, COUNT_CART, BLUR_CART,
    PREV_CART, NEXT_CART, UPDATE_CART, CHECK_OUT, DELETE_BILLS} from './Constants';

export const add_cart = (payload, id, valueInput) => {

    return {
        type: ADD_CART,
        productId: id,
        value: valueInput,
        payload
    }

}

export const count_Cart = (value) => {
    return{
        type: COUNT_CART,
        value
    }
}

export const delete_Cart = (index, quantity) => {

    return {
        type: DELETE_CART,
        quantity: quantity,
        index
    }

}

export const prev_Cart = (index) => {

    return {
        type: PREV_CART,
       
        index
    }
}

export const next_Cart = (index) => {

    return {
        type: NEXT_CART,
        
        index
    }
}

export const update_cart = (value, index) => {
    if(value === 0) value = ""
    return {
        type: UPDATE_CART,
        value,
        index
    }
}

export const blur_cart = (index, quantity) => {
    
    return {
        type: BLUR_CART,
        quantity,
        index
    }
}

export const check_out = (cartBill, id, newTotal) => {

    return {
        type: CHECK_OUT,
        cartBill,
        id,
        newTotal,
    }
}

export const delete_bills = () => {

    return {
        type: DELETE_BILLS,
    }
}
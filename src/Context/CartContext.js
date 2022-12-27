
import React, { useState, createContext } from "react";

export const carro = createContext();
const { Provider } = carro;

const CustomProvider = ({ children }) => {

const [cartproducts, setCartproducts] = useState( [] )
const [cartquantity, setCartquantity] = useState( 0 );

// funciones carrito

const addItem = (item, itemQty) => {
    if(isInCart(item.id)){
        const formerCart = [...cartproducts]
        const formerCartquantity = [...cartquantity]
        const testItem = formerCart.find(i => i.id === item.id)
        testItem.qty += itemQty
        formerCartquantity += itemQty
        
        setCartproducts(formerCart)
        setCartquantity(formerCartquantity)

    } else {
        setCartproducts(...cartproducts, item);
        setCartquantity(itemQty)
    }
    
}

const removeItem = (itemId) => {


};

const clearCart = () => {
    setCartproducts([]);
    setCartquantity(0);
};

//usInCartdevuelve booleano
const isInCart = (id) => cartproducts.some(item => item.id === id)



    return ( 
        <Provider value = {{ cartproducts, clearCart, isInCart, addItem }}> 
        {children}
        </Provider>
     );
}
 
export default CustomProvider;
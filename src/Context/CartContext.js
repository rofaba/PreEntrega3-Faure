
import React, { useState, createContext } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CustomProvider = ({ children }) => {

const [cartproducts, setCartproducts] = useState( [] )

// const [cartquantity, setCartquantity] = useState( 0 );

// funciones carrito

const isInCart = (id)=>{
    return cartproducts.some(item => item.id === id)
}

const addItem = (item) => {
    
    if(isInCart(item.id)) {
        console.log("producto en carro")
        let cartInProgress = [...cartproducts]
        let presentItem = cartInProgress.find(elem => elem.id === item.id)
        presentItem.qty += item.qty;
        setCartproducts(cartInProgress)
           
    } else {  

    console.log(item.id, item.qty)
    setCartproducts([...cartproducts, item])
    }
    
}

//eliminar item por Id
const removeItem = (id) => {
    let cartInProgress = [...cartproducts]
    let newFilteredCart = cartInProgress.filter(elem => elem.id === id)
    setCartproducts(newFilteredCart)       
}

//Limpiar Carrito
const clearCart = () => {
    setCartproducts([]);

};
//persistencia para /y pruebas
let memoryCart = [];
memoryCart = cartproducts;

// console.log(memoryCart);

// clearCart();


    return ( 
        <Provider value = {{ cartproducts, clearCart, isInCart, addItem, removeItem }}> 
        {children}
        </Provider>
     );
}
 
export default CustomProvider;
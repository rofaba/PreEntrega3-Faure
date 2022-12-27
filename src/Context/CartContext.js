
import React, { useState, createContext } from "react";

export const carro = createContext();
const { Provider } = carro;

const CustomProvider = ({ children }) => {

const [products, setProducts] = useState( [] )
const [quantity, setQuantity] = useState( 0 );

//EJEMPLO
// products = [ 
//     {   products: 
//                 {
//                 name: "Producto Uno",
//                 price: 999,
//                 quantity: 2,
//                 },
//         quantity: 1
//     }
//]

// funciones carrito

const addItem = (item, quantity) => {
    if(isInCart(item.id)){
        const testCart = [...products]
        const testItem = testCart.find(i => i.id === item.id)
        testItem.quantity += item.quantity
        setProducts(testCart)
    } else {
        setProducts(...products, item);
    }
    
    setQuantity(...quantity, item);
}

const removeItem = (itemId) => {


};

const clearCart = () => {
    setProducts([]);
    setQuantity(0);
};

//usInCartdevuelve booleano
const isInCart = (id) => products.some(item => item.id === id)

//objeto con las funciones
const contexto ={ clearCart, isInCart};


    return ( 
        <Provider value = {{ products, contexto }}> 
        {children}
        </Provider>
     );
}
 
export default CustomProvider;
import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItemFunc: (item) => { },
    removeItemFunc: (id) => { }
})

export default CartContext;
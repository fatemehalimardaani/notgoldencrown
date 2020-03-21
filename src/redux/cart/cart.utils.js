export const addItemToCart=(cartItems,itemToadd)=>{
    const existingItem=cartItems.find(item=>item.id === itemToadd.id);
    if(existingItem){
        return cartItems.map(item => item.id === itemToadd.id ? {...item, quantity:item.quantity+1} : item)

    }
    return [...cartItems,{...itemToadd , quantity :1}]
}


export const removeItemFromCart=(cartItems,itemToRemove)=>{

    const existingCartItem=cartItems.find(item=>item.id === itemToRemove.id)

    if (existingCartItem.quantity === 1) {

        return cartItems.filter(item => item.id !== itemToRemove.id)

    }

    return cartItems.map(item => 
        item.id === itemToRemove.id ? { ...item , quantity:item.quantity-1} : item
        );
}


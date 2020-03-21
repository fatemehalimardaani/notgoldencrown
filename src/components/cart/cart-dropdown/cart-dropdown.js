import React from 'react'
import './cart-dropdown.scss';
import CartItem from './../cart-item/cart-item'
import CustomBtn from './../../custom-btn/custom-btn'
import {connect} from 'react-redux';
import {selectCartItems} from './../../../redux/cart/cart-selector';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from './../../../redux/cart/cart-action';
const CartDropDown=({cartItems,history,dispatch})=>{

    console.log(cartItems)

    return(
        <div className="cart-dropdown">
            <div className="cart-items">

                {
                    cartItems.length ?  
                        cartItems.map( item => <CartItem key={item.id} item={item} /> ) : 
                        <span className="empty-message">Your cart is empty</span>
                }

            </div>
            <CustomBtn

                onClick={
                    ()=>{history.push('/checkout');
                         dispatch(toggleCartHidden()) 
            
            } }
             
             >
                Go to checkout
            </CustomBtn>


           
        </div>
    )  
}
const mapStateToProp= state =>({
    cartItems:selectCartItems(state)
})


export default withRouter(connect(mapStateToProp)(CartDropDown));
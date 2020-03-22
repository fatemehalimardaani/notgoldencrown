
import React from 'react';
import {ReactComponent as ShoppingIcon  } from '../../../assets/shopping-bag.svg';
import './cart-icon.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from './../../../redux/cart/cart-action'
import {selectCartItemsCount} from './../../../redux/cart/cart-selector'
const CartIcon=({harchi,cartItemsCount})=>{
    // const quantities=cartItems.map(item=>item.quantity);
    // const numberoforder=quantities.reduce((a,b)=>a+b,0)
    // console.log(quantities)
    return(
    <div className="cart-icon" onClick={harchi}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">
            {cartItemsCount}
        </span>
    </div>
)
}

const mapDispatchToProps=dispatch=>({
    harchi: () => dispatch(toggleCartHidden())
})
const mapStateToProps=state=>{    
    return({
    cartItemsCount:selectCartItemsCount(state)
})
}

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
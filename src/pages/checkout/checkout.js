import React from 'react';
import {connect} from 'react-redux';
import './checkout.scss';
import {selectCartItems} from './../../redux/cart/cart-selector';
import {selectTotalPrice} from './../../redux/cart/cart-selector';
import CheckoutItem from './../../components/checkout-item/checkout-item';
import { createStructuredSelector } from 'reselect';
import StripeButton from './../../components/stripe-button/stripe-button'
const Checkout=({cartItems,totalPrice})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div> 
        </div>
        {
            cartItems.map(item=><CheckoutItem key={item.id} item={item} />)
        }
        <div className="total">
            <span>
            TOTAL:${totalPrice}
            </span>
        </div>
        <div className="test-warning">
            *Please use the following test creadit card for payments*
            <br/>
            4242 4242 4242 4242-
            Exp: any date from today-
            CVV:123
        </div>
        <StripeButton
            price={totalPrice}
        
        />
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectTotalPrice
  });
  



export default connect(mapStateToProps)(Checkout);
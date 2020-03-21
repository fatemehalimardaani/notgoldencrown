import React from 'react';
import './checkout-item.scss';
import {removeItem, addItem,decreaseItem} from './../../redux/cart/cart-action';
import {connect} from 'react-redux';

const CheckoutItem=({item,removeItem,addItem,decreaseItem})=>(
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={item.imageUrl} />
        </div>
        <span className="name">{item.name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=>decreaseItem(item)}> 
                &#10094;
                
            </div>
            <span className="value">
                {item.quantity}
            </span>
            <div className="arrow" onClick={()=>addItem(item)} >
                &#10095;
            </div>
       </span>
        <span className="price">{item.price}</span>
        <div className="remove-button" onClick={()=>removeItem(item)}>
            &#10005;
        </div>
    </div>
)

const mapDispatchToProps= dispatch => ({
    removeItem:item => dispatch(removeItem(item)),
    addItem:item => dispatch(addItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item)),

})

export default connect(null,mapDispatchToProps)(CheckoutItem);
import React from 'react';
import './collection-item.scss';
import CustomBtn from './../custom-btn/custom-btn';
import {addItem} from './../../redux/cart/cart-action';
import {connect} from 'react-redux';
const CollectionItem=({item,addItem})=>{
    return(
        <div className="collection-item">
            <div className="image" style={{
                backgroundImage:`url(${item.imageUrl})`
            }} ></div>
            <div className="collection-footer">
                <span className="name">{item.name}</span>
                <span className="price">  ${item.price}</span>
            </div>
            <CustomBtn onClick={()=>addItem(item)} addTocart>Add To cart</CustomBtn>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    addItem: item => dispatch( addItem(item) )
})


export default connect(null,mapDispatchToProps)(CollectionItem);
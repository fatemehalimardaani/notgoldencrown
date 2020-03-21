import React from 'react';
import './custom-btn.scss';

const CustomBtn=({children,googleSignIn,addTocart,...otherProps})=>(
    
        <button className= {`${googleSignIn?'google-sign-in':''}   ${addTocart?'addTocart':''} custom-button`}  {...otherProps}>{children}</button>
    
);
export default CustomBtn;
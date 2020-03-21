import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "./../../assets/crown.svg";
import './header.scss';
import {auth} from "../firebase/firebase.utils";
import { connect } from 'react-redux';
import CartIcon from '../cart/cart-icon/cart-icon';
import CartDropDown from '../cart/cart-dropdown/cart-dropdown';
import {selectCurrentUser} from './../../redux/user/user.selector';
import {cartHidden} from './../../redux/cart/cart-selector'
const Header=({currentUser,hidden})=>(
    <header className="header">
        <Link className="logo-container" to='/'>
            <Logo/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">shop</Link>
            <Link className="option" to="/contact">contact</Link>
            {currentUser?
                    <div onClick={()=>auth.signOut()}>
                        SIGN OUT
                    </div>:
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
            }
            <CartIcon/>
            {
                hidden? <CartDropDown/> : null
            }
            
        </div>

    </header>
);

const mapStateToProps=state=>({
    currentUser:selectCurrentUser(state),
    hidden:cartHidden(state)

})
export default connect(mapStateToProps)(Header);
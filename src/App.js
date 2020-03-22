import React  from 'react';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from "./components/header/header";
import SignInSignUp from './pages/signin-signup/signin-signup';
import {userAction} from './redux/user/user-action'
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './pages/checkout/checkout'
class App extends React.Component{
    
    componentDidMount() {
        const {setCurrentUser} =this.props
        this.unsubscribeFromAuth=auth.onAuthStateChanged (async user=>{
            if(user){
                const userRef=await createUserProfileDocument(user)
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                      id: snapShot.id,
                      ...snapShot.data()
                    });
                  });

            }
            setCurrentUser(user)
            console.log(user);
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }
    render(){
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact  path="/" component={HomePage} />
                    <Route  path="/shop" component={ShopPage} />
                    <Route  path="/contact" component={HomePage} />
                    <Route exact path="/signin" render={()=>this.props.currentUser ? <Redirect to="/"/> : <SignInSignUp/>} component={SignInSignUp} />
                    <Route exact  path="/checkout" component={Checkout} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps=(state)=>({
    setCurrentUser:selectCurrentUser(state)
})

const mapDispatchToPops=dispatch=>({
    setCurrentUser:user=>dispatch(userAction(user))
})
export default connect(mapStateToProps,mapDispatchToPops)(App);

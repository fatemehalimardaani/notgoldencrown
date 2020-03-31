import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview'
import {Route} from 'react-router-dom'
import CollectionPage from './../category/category'
import {firestore,convertCollectionsSnapshotToMap} from '../../components/firebase/firebase.utils'
import {updateCollections} from './../../redux/shop/shop-action'
import {connect} from 'react-redux'
import WithSpinner from './../../components/with-spinner/with-spinner'



const CollectionOverviewWithSpinner=WithSpinner(CollectionOverview)
const CollectionPageWithSpinner=WithSpinner(CollectionPage)


class  ShopPage extends React.Component{

    state={
        loading:true
    }

    unsubscribeFromSnapshot=null;

    // componentDidMount(){
    //     const {updateCollections}=this.props;
    //     const collectionRef=firestore.collection('collections')
    //     this.unsubscribeFromSnapshot=collectionRef.onSnapshot(async snapShot=>{
    //         const collectionsMap=convertCollectionsSnapshotToMap(snapShot)
    //         updateCollections(collectionsMap)
    //         this.setState({
    //             loading:false
    //         })
    //     })

        
    // }

    
        
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
    
        collectionRef.get().then(snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          updateCollections(collectionsMap);
          this.setState({ loading: false });
        });
      }

    render(){
        const {match}=this.props
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`}  render={(props)=> <CollectionOverviewWithSpinner isLoading={this.state.loading} {...props} /> } />
                <Route  path={`${match.path}/:collectionId`}  render={(props)=> <CollectionPageWithSpinner isLoading={this.state.loading} {...props} /> }/>
            </div>
        )
    }
} 


const mapDispatchToProps=dispatch=>({
    updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
})


export default connect(null,mapDispatchToProps)(ShopPage);



import React from 'react';
import './collection-overview.scss';
import CollectionPreview from '../collection-preview/preview-collection';
import {connect} from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selector';
import { createStructuredSelector } from 'reselect';

const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
  
  
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  });
  
  export default connect(mapStateToProps)(CollectionOverview);






import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import {selectDirectorySections} from './../../redux/directory/directory-selector'
import './directory.styles.scss';
import {connect} from 'react-redux';
const Directory =({sections})=>{
  console.log(sections)
  return(
    <div className='directory-menu'>
        {sections.map(({id,...otherSectionProp }) => (
          <MenuItem key={id} {...otherSectionProp} />
        ))}
    </div>
)
  
}


const mapStateToProps=(state)=>({

  sections:selectDirectorySections(state)

})

export default connect(mapStateToProps)(Directory);

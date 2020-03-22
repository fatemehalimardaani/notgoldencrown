import React from 'react';
import Directory from '../../components/directory/directory.component';
import {HomepageContainer} from './homepage.style'
const HomePage = (props) => {
        console.log(props);
        return(
        <HomepageContainer>
            <Directory />
        </HomepageContainer>
    )
}
;

export default HomePage;

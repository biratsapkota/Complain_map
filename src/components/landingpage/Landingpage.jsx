import React from 'react';
import LeftComponent from '../leftcomponent/LeftComponent'
import RightComponent from '../rightcomponent/RightComponent'
import styles from './styles/landingpage.module.scss'

class Landingpage extends React.Component {
    render(){
			return(
				<div className={styles.landingpage}>
					<LeftComponent />
					<RightComponent />
				</div>
			)
    }
};

export default Landingpage;
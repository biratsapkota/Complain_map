import React from 'react';
import LeftComponent from '../leftcomponent/LeftComponent'
import RightComponent from '../rightcomponent/RightComponent'
import styles from './styles/landingpage.module.scss'

class Landingpage extends React.Component {
	constructor(){
		super();
		this.state = {
			active_tab_id:1,
		}
	}

	activateTab = (id) =>{
		this.setState({
			active_tab_id:id,
		})
	}
	
    render(){
			return(
				<div className={styles.landingpage}>
					<LeftComponent activateTab={this.activateTab} active_tab_id={this.state.active_tab_id} />
					<RightComponent active_tab_id={this.state.active_tab_id} />
				</div>
			)
    }
};

export default Landingpage;
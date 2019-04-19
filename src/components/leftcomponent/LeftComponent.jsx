import React from 'react';
import Statistics from './Statistics';
import styles from './styles/leftcomponent.module.scss';
import { NavLink } from 'react-router-dom';

class LeftComponent extends React.Component {
	constructor(){
		super()
		this.state={
			display_left:'block',
			display_icon:'none',
		}
	}

	handleLeft=()=>{
		this.setState({
			display_left:'none',
			display_icon:'block',
		})
	}

	handleRight=()=>{
		this.setState({
			display_left:'block',
			display_icon:'none',
		})
	}

	render(){
		let display = "";
		let all_wrapper={};
		let bara_wrapper={};
		let phalebas_wrapper={};
		let godawari_wrapper={};
		let { active_tab_id,activateTab } = this.props;

		if(active_tab_id === 1){
			display=(<Statistics name="All" color="#ff7088" number="1756" />);
			all_wrapper = {backgroundColor:'#ff7088',boxShadow:'3px 2px 15px 3px rgba(255,112,136,0.3)',color:'white'};
		}
		else if(active_tab_id === 2){
			display = (<Statistics name="Bara" color="#0a82c7" number="623" />);
			bara_wrapper = {backgroundColor:'#0a82c7',boxShadow:'3px 2px 15px 3px rgba(10,130,199,0.3)',color:'white'};
		}
		else if(active_tab_id === 3){
			display=(<Statistics name="Phalebas" color="#c003c0" number="619" />);
			phalebas_wrapper = {backgroundColor:'#c003c0',boxShadow:'3px 2px 15px 3px rgba(192,3,192,0.3)',color:'white'};
		}
		else if(active_tab_id === 4){
			display = (<Statistics name="Godawari" color="#2cc02c" number="516" />);
			godawari_wrapper = {backgroundColor:'#2cc02c',boxShadow:'3px 2px 15px 3px rgba(44,192,44,0.3)',color:'white'};
		}

		return(
			<div>
				<div className={styles.toggle_icon} style={{display:this.state.display_icon}} onClick={this.handleRight}>
					<i className="fas fa-chevron-right"></i>
				</div>
				<div className={styles.left_component_wrapper} style={{display:this.state.display_left}}>
					<NavLink to="/report">
						<img
							src="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1547354763/CHMimage/saas.svg" 
							alt="companylogo" 
							className={styles.logo} 
						/>
					</NavLink>
				<div className={styles.toggle_icon} onClick={this.handleLeft}>
					<i className="fas fa-chevron-left" />
				</div>
				<div className={styles.tab_wrapper}>
					<div style={ all_wrapper } className={styles.tab} onClick={activateTab.bind(this,1)}>All</div>
					<div style={ bara_wrapper } className={styles.tab} onClick={activateTab.bind(this,2)}>Bara</div>
					<div style={ phalebas_wrapper } className={styles.tab} onClick={activateTab.bind(this,3)}>Phalebas</div>
					<div style={ godawari_wrapper } className={styles.tab} onClick={activateTab.bind(this,4)}>Godawari</div>
				</div>

					{display}

				</div>
			</div>
			
		)
	}
};

export default LeftComponent;
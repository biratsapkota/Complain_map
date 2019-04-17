import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import styles from './styles/rightcomponent.module.scss'
import 'react-leaflet-markercluster/dist/styles.min.css';


class RightComponent extends React.Component{
	constructor(){
		super();
		this.state = {
			display_scroll:'none',
			zoom:false,
		}
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	componentDidMount=()=> {
		window.addEventListener('scroll',this.handleScroll);
		setInterval(this.removeScroll, 5000);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll=()=> {	
		this.setState({
			display_scroll:'block',
			zoom:false,
		});
	}

	hideScroll = () =>{
		this.setState({
			display_scroll:'none',
			zoom:true,
		})
	}

	removeScroll=()=>{
		this.setState ({
		  display_scroll:'none'
		})
	}

	handleKeyDown=(event)=>{
		console.log('fired',event)
		if(event.key==='Control') {
			this.setState({
				display_scroll:'none',
				zoom:true,
			})
			console.log('pressed')
		}else{
			this.setState({
				display_scroll:'block',
				zoom:false,
			})
		}		
	}

	render(){
		const {active_tab_id}=this.props;
		let center_position;
		let locations=[];
		if (active_tab_id === 1){
			locations=[
				{
					name:'location_1',
					long:28,
					lat:39.0111458605
				},
				{
					name:'location_2',
					long:28,
					lat: 38.8410857803
				},
				{
					name:'location_3',
					long:28,
					lat:38.9081784965,
				},
				{
					name:'location_4',
					long:28,
					lat:38.9786336339,
				},
			];
			center_position=[28,38.8410857803]
		}
		else if(active_tab_id === 2){
			locations=[
				{
					name:'location_1',
					long:28,
					lat:84.86986,
				},
				{
					name:'location_2',
					long:28,
					lat:84.97986,
				},
				{
					name:'location_3',
					long:28.1,
					lat:84.9687,
				},
				{
					name:'location_4',
					long:28.01,
					lat:84.986986,
				},
			];
			center_position = [28,84.97986];
		}
		else if(active_tab_id === 3){
			locations=[
				{
					name:'location_1',
					long:28,
					lat:39.0111458605
				},
				{
					name:'location_2',
					long:28,
					lat: 38.8410857803
				},
				{
					name:'location_3',
					long:28,
					lat:38.9081784965,
				},
				{
					name:'location_4',
					long:28,
					lat:38.9786336339,
				},
			];
			center_position=[28,38.8410857803]
		}
		else if(active_tab_id === 4){
			locations=[
				{
					name:'location_1',
					long:28,
					lat:84.86986,
				},
				{
					name:'location_2',
					long:28,
					lat:84.97986,
				},
				{
					name:'location_3',
					long:28.1,
					lat:84.9687,
				},
				{
					name:'location_4',
					long:28.01,
					lat:84.986986,
				},
			];
			center_position = [28,84.97986];
		}
		 

		let marker_display = locations.map((location,index) =>{
				let position = [location.long,location.lat];
				return(
					<Marker key={index} position={position}>
						<Popup>
							{location.name}
						</Popup>
					</Marker>   
				)
			})
		return(
			<div onKeyPress={this.handleKeyDown}>
				<LeafletMap center={center_position} zoom={9} maxZoom={20} style={{height:'100vh',width:'56vw'}} scrollWheelZoom={this.state.zoom} onScroll={this.hideScroll}>
					<TileLayer
						attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<MarkerClusterGroup>
						{marker_display}
					</MarkerClusterGroup>				
				</LeafletMap>
				<div style={{display:this.state.display_scroll}} className={styles.on_scroll} >
					<div className={styles.press}>Press ctrl + to zoom</div>
				</div>
			</div>
		)
	}
}

export default RightComponent
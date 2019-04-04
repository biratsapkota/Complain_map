import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';

//import L from 'leaflet';
//import 'leaflet/dist/leaflet.css';
//import styled from 'styled-components';

// const Wrapper = styled.div`
//     width:${props => props.width};
//     height:${props => props.height};
// `;

class RightComponent extends React.Component{

    // componentDidMount(){
    //     this.map = L.map('map',{
    //         center:[28,84],
    //         zoom:7,
    //     });

    //     var locations = [
    //         ["LOCATION_1",28, 84],
    //         ["LOCATION_2",28.2, 85],
    //         ["LOCATION_3",28.1, 84],
    //         ["LOCATION_4",28.1, 84],
    //         ["LOCATION_5",28.01, 84]
    //     ];

    //     let marker;
        
    //     var greenIcon = L.icon({
    //         iconUrl: 'https://res.cloudinary.com/dpy0mkwsp/image/upload/v1554107443/pngs/icons8-marker-80.png',
        
    //         iconSize:[30, 30], // size of the icon
    //      });
        
    //      for (var i = 0; i < locations.length; i++) {
	// 				marker = new L.marker([locations[i][1],locations[i][2]], {icon: greenIcon})
	// 				.bindPopup(locations[i][0])
	// 				.addTo(this.map);
    //     }

    //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    //         detectRetina:true,
    //         maxZoom: 20,
    //         maxNativeZoom:17,
    //     }).addTo(this.map);
    // }
    
	render(){
		const center_position = [28,84]
		let locations=[
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

		let marker_display = locations.map(location =>{
				let position = [location.long,location.lat]
				return(
					<Marker position={position}>
						<Popup>
							{location.name}
						</Popup>
					</Marker>   
				)
			})
		return(
			<div>
				<LeafletMap center={center_position} zoom={7} maxZoom={20} style={{height:'98.5vh',width:'57vw'}}>
					<TileLayer
						attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<MarkerClusterGroup>
						{marker_display}
					</MarkerClusterGroup>					
				</LeafletMap>
			</div>
		)
	}
}

export default RightComponent
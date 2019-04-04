import React from 'react';
import {BarChart, Bar} from 'recharts';
import styles from './styles/statistics.module.scss';

class Statistics extends React.Component{
    render(){
			const { name,number,color } = this.props;
			let complain_border={border:'4px solid' + color}
			return(
				<div className={styles.statistics_wrapper}>
					<div className={styles.upper_statistics}>
						<div className={styles.months}>
							<div>
								<div>3</div>
								<div>Months</div>
							</div>						
						</div>
						<div className={styles.reports}>
							<div>
								<div>{number}</div>
								<div>reports</div>
								<div>processed</div>
							</div>
						</div>
						<div className={styles.surveys}>
							<div>
								<div>12 Surveys</div>
								<div>X</div>
								<div>34 Wards</div>
							</div>
						</div>
						<div className={styles.community_meeting}>
							<div>
								<div>49</div>
								<div>Community</div>
								<div>meetings</div>
							</div>						
						</div>
						<div className={styles.field_staff}>
							<div>
								<div>13</div>
								<div>Field</div>
								<div>Staffs</div>
							</div>
						</div>
					</div>
					<div className={styles.lower_statistics}>
						<div className={styles.total_complaints}>
							<div className={styles.complaint_head}>{name}</div>
							<div className={styles.show_complaints}style={complain_border}>
								<div style={{color:color}} className={styles.complaint_number}>{number}</div>
								<div>total</div>
								<div>complaints</div>
							</div>
						</div>
						<BarGraph color={color}/>
						<div className = {styles.male_female_wrapper}>
							<div className={styles.male_female_head}>Who did the reports come from?</div>
							<div className={styles.male_female}>
								<div className = {styles.female} >
									<i className="fas fa-female fa-5x" style={{color:color}} />
									<div className={styles.female_info}>
										<div>35%</div>
										<div>from</div>
										<div>females</div>
									</div>									
								</div>
								<div className = {styles.male} >
									<i className="fas fa-male fa-5x" style={{color:color}} />
									<div className={styles.male_info}>
										<div>65%</div>
										<div>from</div>
										<div>males</div>
									</div>								
								</div>
							</div>
							</div>					
					</div>			
					
				</div>
			)
    }
}

export default Statistics;

class BarGraph extends React.Component{	
	// renderTooltip(name) {
	// 	console.log(name)
	// 	return (
	// 		<div>name</div>
	// 	)
	// }

	render(){
		const data = [
			{name: 'Road', uv: 4000},
			{name: 'Drinking Water', uv: 3000},
			{name: 'Waste Management', uv: 2000},
			{name: 'Relief', uv: 2780},
			{name: 'Other Admin', uv: 1890},
		];

		// data.map(d=>{
		// 	console.log(d.name);
		// })

		return(
			<div className={styles.barchart}>
				<BarChart width={150} height={100} data={data}>
         <Bar dataKey='uv' fill={this.props.color}/>
       	</BarChart>
			</div>
		)
	}
}

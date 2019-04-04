import React from 'react';
import styles from './styles/mainreport.module.scss';

export default class MainReport extends React.Component{
	render(){
		return(
			<div className={styles.mainreport_wrapper}>
				<ReportHeader />
				<div className={styles.report_body}>
					<div className={styles.body_left}>
						<div className={styles.body_image}></div>
					</div>
					<div className={styles.body_right}>
						<div className={styles.description_wrapper}>
							<div className={styles.body_head}>Description:</div>
							<div className={styles.body_info}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, ullamfaufgfuafyhsagfu!</div>
						</div>
						<div className={styles.name_wrapper}>
							<div className={styles.body_head}>Full Name:</div>
							<div className={styles.body_info}>Lorem, ipsum.</div>	
						</div>
						<div className={styles.stage_wrapper}>
							<div className={styles.body_head}>Stage:</div>
							<div className={styles.body_info}>lorem</div>
						</div>
						<div className={styles.gender_wrapper}>
							<div className={styles.body_head}>Gender:</div>
							<div className={styles.body_info}>Male</div>
						</div>
					</div>				
				</div>		
				
			</div>
		)
	}
}

const ReportHeader = () =>{
	return(
		<div className={styles.report_header}>
				<div className={styles.report_id}>
				<span>Report ID:</span>
				<span className={styles.report_number}>12345678</span>
			</div>
			<div className={styles.report_head}>Electricity Related Complaints</div>
			<div className={styles.report_date}>
				<div className={styles.date_icon}>
					<i className="fas fa-clock" />
				</div>
				<div className={styles.date}>2018-04-19 20:47:35 </div>
			</div>
			<div className={styles.report_ward}>
				<div className={styles.ward_info}>
					<div className={styles.ward_icon}>
						<i className="fas fa-globe-asia" />
					</div>
					<div className={styles.ward}>
						Ward 11, Parata Tole, <span style={{fontWeight:'500'}}>Phalebas</span>
					</div>
				</div>
				<div className={styles.report_type}>Development Complaint</div>
			</div>
		</div>
	)
}
import React from 'react';
import Header from './header/Header';
import MainReport from './MainReport';
import SimilarReport from './SimilarReport';
import styles from './styles/report.module.scss';

export default class Report extends React.Component{
	render(){
		return(
			<div className={styles.report_wrapper}>
				<Header />
				<div className={styles.report_container}>
					<MainReport />
					<SimilarReport />
				</div>
			</div>
		)
	}
}
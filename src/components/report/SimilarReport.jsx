import React from 'react';
import styles from './styles/similarreport.module.scss';

export default class SimilarReport extends React.Component{
    render(){
        return(
            <div>
							<SimilarMap />
							<SimilarPlaces />
            </div>
        )
    }
}

const SimilarMap = () =>{
	return(
		<div className={styles.similar_map_wrapper}>
			<div className={styles.similar_map_head}>Similar reports</div>
			<div className={styles.similar_map}>Map</div>
		</div>
	)
}

const SimilarPlaces = () =>{
	return(
		<div className={styles.similar_place_wrapper}>
			<div className={styles.similar_place_head}>Reports from same ward</div>
			<div className={styles.similar_reports}>
				<div className={styles.similar_reports_info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam expedita itaque, blanditiis ipsum velit reiciendis quos nemo error optio voluptatibus, voluptas mollitia nisi molestias quod quisquam officiis! Ducimus, delectus!</div>
				<div className={styles.similar_place}>
					<div className={styles.place_icon}>
						<i className="fas fa-globe-asia" />
					</div>
					<div className={styles.place_info}>
						Kurgha Panta tole, Phalebas
					</div>				
				</div>	
			</div>
		</div>
	)
}
import React from 'react';
import styles from './styles/header.module.scss';

export default class  Header extends React.Component{
	render(){
		return(
			<div className={styles.header_wrapper}>
				<img src="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1554267740/pngs/logowhite.png" alt="company logo" />
				<div className={styles.search_field}>
					<input type="text" placeholder="Search" />
					<div className={styles.search_icon}>
						<i className="fas fa-search" />
					</div>
				</div>			
			</div>
		)
	}
}
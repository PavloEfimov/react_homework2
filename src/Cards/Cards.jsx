import React from 'react';
import './Cards.css';


class Cards extends React.Component {
	render(){
		const {name, text, rating, chips, onClick} = this.props;
		return(
			<div className = 'Cards'>
			<h3>{name}</h3>
			<button className = 'button' onClick={onClick}>DELETE</button>
			<p className ='Cards__text'>{text}</p>
			<h5 className = 'Cards__rating'>rating: {rating}</h5>
			<ul className='Cards__chips'>{chips}</ul>
			</div>
		)
	}



}

export default Cards;
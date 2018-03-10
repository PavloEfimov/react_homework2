import React from 'react';
import Cards from '../Cards/Cards';
import './CardList.css';



export default class CardList extends React.Component {

	

	render(){
	const { CardsListing, onCardClick } = this.props;
	return(
	<div>
		
		<div className = 'cardsBlock' >
			{CardsListing.map((n,idx)=>(

			<Cards name = {n.name } text = {n.text } rating = {n.rating } chips = {n.chips.map(chip => < li className = 'Cards__chips__item' > { chip } < /li>) } 
			onClick={() => {
              onCardClick(n.id);
            }}

			/ >

			))

			}
		</div >
	 
	</div>
		)
	}




}
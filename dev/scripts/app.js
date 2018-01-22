import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import CardListItem from './components/card-list-item';
import Sidebar from './components/sidebar';
import DropDown from './components//drop-down';

class App extends React.Component {
	render() {
	return (
		<div>
		<Header />
		<main className="wrapper">
			<Sidebar />
			<div className="cardList">
				<div>
					<div className="cardListDrop clearfix">
						<DropDown />
					</div>
				<div className="cardListInner">
					<CardListItem />
					<CardListItem />
					<CardListItem />
					<CardListItem />
					<CardListItem />
					<CardListItem />
					<CardListItem />
					<CardListItem />
					<CardListItem />
					<CardListItem />
					<CardListItem />
					<CardListItem />
				</div>
				</div>	
			</div>
		</main>
		</div>
		)
	}
}	

ReactDOM.render(<App />, document.getElementById('app'));

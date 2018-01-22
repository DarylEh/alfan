import React from 'react';
import ReactDOM from 'react-dom';

const CardListItem = () => {
    return (
            <div className="cardItem">
                <img src="http://fillmurray.com/150/150" alt=""/>
                <div className="cardDetails">
                    <div className="cardDetailName">
                    <h4 className="cardName">elrubiusOMG</h4> &nbsp; <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                    <p>🇪🇸 &nbsp; Spain | Comedy</p>
                    <p>6.5m Avg \ 25.6 m Subcribers</p> 
                </div>
            </div>
    )
}
export default CardListItem 
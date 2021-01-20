import React from 'react';

function PortfolioMenu(props){
    return(
        <li><a href="/" data-filter={props.data_filter}>{props.name}</a></li>
    );
}

export default PortfolioMenu;
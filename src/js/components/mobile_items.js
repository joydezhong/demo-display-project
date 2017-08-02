import React from 'react';
import ReactDOM from 'react-dom';

import {Router,Route,hashHistory} from 'react-router';

import { Row, Col } from 'antd';

export default class MobileItems extends React.Component{

	constructor(){
        super();
    };


	render(){
		
		return (
		  		<div className="m_itemsBox">
			  		<div class="m_item">
			  			<a href={this.props.itemSrc} target="_blank">
			  				<div class="m_item-pic-box">
			  					<img src={this.props.imgSrc} alt={this.props.itemTitle} class="m_item-img" />
			  				</div>
			  				<div class="m_item-name" title={this.props.itemTitle}>
			  					<br />
			  					{this.props.itemTitle}
			  				</div>
			  			</a>
			  		</div>
			    </div>
		);
	};
}

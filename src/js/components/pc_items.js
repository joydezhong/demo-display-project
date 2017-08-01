import React from 'react';
import ReactDOM from 'react-dom';

import {Router,Route,hashHistory} from 'react-router';

import { Row, Col } from 'antd';

export default class PCItems extends React.Component{

	constructor(){
        super();
    };


	render(){
		
		return (
		  		<div className="itemsBox">
			  		<div class="item">
			  			<a href={this.props.itemSrc} target="_blank">
			  				<div class="item-pic-box">
			  					<img src={this.props.imgSrc} alt={this.props.itemTitle} class="item-img" />
			  				</div>
			  				<div class="item-name" title={this.props.itemTitle}>
			  					<br />
			  					{this.props.itemTitle}
			  				</div>
			  			</a>
			  		</div>
			    </div>
		);
	};
}

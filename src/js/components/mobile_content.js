import React from 'react';
import ReactDOM from 'react-dom';

import {Router,Route,hashHistory} from 'react-router';

import { Layout, Row, Col } from 'antd';

import MobileItems from './mobile_items';

const Content = Layout;

export default class MobileContent extends React.Component{
	render(){


		const boxDivStyle = {
			background: '#ececec', 
			padding: 24, 
			minHeight: 880
		};
		const breadStyle = {
			margin: '12px 0'
		};

		  return (
		  		<div>
				    <Content>
				      	<div style={boxDivStyle}>
				      		<Row>
								<Col span={24}>
									<MobileItems itemTitle="Demo演示案例一" itemSrc="" imgSrc="./src/images/web01.jpg" />
								</Col>
							</Row>
							<Row>
								<Col span={24}>
									<MobileItems itemTitle="Demo演示案例二" itemSrc="" imgSrc="./src/images/web02.jpg" />
								</Col>
							</Row>
							<Row>
								<Col span={24}>
									<MobileItems itemTitle="小游戏Demo演示" itemSrc="" imgSrc="./src/images/game01.png" />
								</Col>
							</Row>
							<Row>
								<Col span={24}>
									<MobileItems itemTitle="游戏案例展示" itemSrc="" imgSrc="./src/images/game02.jpg" />
								</Col>
							</Row>
							<Row>
								<Col span={24}>
									<MobileItems itemTitle="Demo演示案例三" itemSrc="" imgSrc="./src/images/web03.jpg" />
								</Col>
							</Row>
							<Row>
								<Col span={24}>
									<MobileItems itemTitle="Demo演示案例四" itemSrc="" imgSrc="./src/images/web04.png" />
								</Col>
							</Row>
				      	</div>
				    </Content>
			    </div>

		);
	};
}

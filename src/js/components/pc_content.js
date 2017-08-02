import React from 'react';
import ReactDOM from 'react-dom';

import {Router,Route,hashHistory} from 'react-router';

import { Layout, Carousel, Row, Col } from 'antd';

import PCItems from './pc_items';

const Content = Layout;

export default class PCContent extends React.Component{
	render(){

		const contentStyle = {
			padding: '0 50px',
			marginTop: '50px'
		};
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
			  		<Carousel autoplay className="slideShow" effect="fade">
						<div>
							<img src="./src/images/banner01.jpg" alt="标签图片"/>
							<p>Demo演示型站点</p>
						</div>
						<div>
							<img src="./src/images/banner02.png" alt="移动端图片"/>
							<p>Demo不断更新中...</p>
						</div>
					</Carousel>
					
				    <Content style={contentStyle}>
				      	<div style={boxDivStyle}>
				      		<Row gutter={18}>
				      			<Col span={2}></Col>
								<Col span={10}>
									<PCItems itemTitle="Demo演示案例一" itemSrc="" imgSrc="./src/images/web01.jpg" />
								</Col>
								<Col span={10}>
									<PCItems itemTitle="Demo演示案例二" itemSrc="" imgSrc="./src/images/web02.jpg" />
								</Col>
								<Col span={2}></Col>
							</Row>
							<Row gutter={18}>
								<Col span={2}></Col>
								<Col span={10}>
									<PCItems itemTitle="小游戏Demo演示" itemSrc="" imgSrc="./src/images/game01.png" />
								</Col>
								<Col span={10}>
									<PCItems itemTitle="游戏案例展示" itemSrc="" imgSrc="./src/images/game02.jpg" />
								</Col>
								<Col span={2}></Col>
							</Row>
							<Row gutter={18}>
								<Col span={2}></Col>
								<Col span={10}>
									<PCItems itemTitle="Demo演示案例三" itemSrc="" imgSrc="./src/images/web03.jpg" />
								</Col>
								<Col span={10}>
									<PCItems itemTitle="Demo演示案例四" itemSrc="" imgSrc="./src/images/web04.png" />
								</Col>
								<Col span={2}></Col>
							</Row>
				      	</div>
				    </Content>
			    </div>

		);
	};
}

import React from 'react';
import ReactDOM from 'react-dom';

import {Router,Route,hashHistory,Link} from 'react-router';

import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';

const Header = Layout;

export default class PCHeader extends React.Component{
	render(){

  		const headerStyle = {
  			position: 'fixed',
  			width: '100%',
  			zIndex: 9999
  		};
  		const menuStyle = {
  			lineHeight: '64px',
  			fontSize: '1.2em'
  		};

		return (
			    <Header className="ant-layout-header" style={headerStyle}>
			    	<Row justify="center">
			    		<Col span={10}>
					      	<div className="logo">
					      		<span><img src="./src/images/h5.png" alt="html5"/></span>
					      		<p>Demo演示站点</p>
					      	</div>
					    </Col>
					    <Col span={14}>
				      		<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={menuStyle}>
				        		<Menu.Item key="1">首页</Menu.Item>
				        		<Menu.Item key="2">博客</Menu.Item>
				        		<Menu.Item key="3">Github</Menu.Item>
				        		<Menu.Item key="4">关于我</Menu.Item>

				        		{/*<Menu.Item key="1">
				        			<a href="http://www.baidu.com" target="_blank">首页</a>
				        		</Menu.Item>*/}

				      		</Menu>
				      	</Col>
			      	</Row>
			    </Header>
		);
	};
}

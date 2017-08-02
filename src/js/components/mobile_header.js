import React from 'react';
import ReactDOM from 'react-dom';

import {Router,Route,hashHistory,Link} from 'react-router';

import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';

const Header = Layout;

export default class MobileHeader extends React.Component{
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
			    	<Row>
			    		<Col span={24}>
					      	<div className="mobile-logo">
					      		<span><img src="./src/images/h5.png" alt="html5"/></span>
					      		<p>Demo演示站点</p>
					      	</div>
					    </Col>
			      	</Row>
			    </Header>
		);
	};
}

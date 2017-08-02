import React from 'react';
import ReactDOM from 'react-dom';

import {Router,Route,hashHistory} from 'react-router';

import { Layout, Menu, Breadcrumb } from 'antd';

const Footer = Layout;

export default class MobileFooter extends React.Component{
	render(){

		const footerStyle = {
			textAlign: 'center',
			fontSize: '14px',
			lineHeight: '38px'
		};

		  return (
			    
			    <Footer className="ant-layout-footer" style={footerStyle}>
			      	Joyde·zhong ©2017 Created by React
			    </Footer>

		);
	};
}
import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';

import {Router,Route,hashHistory} from 'react-router';

import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';

const { Header, Content, Footer } = Layout;

export default class Root extends React.Component{
	render(){
		  return (
		  	<div>
			  	<MediaQuery query = '(min-device-width: 1224px)'>
			  		<Layout>
			  			<PCIndex />
			  		</Layout>
			  	</MediaQuery>
			  	<MediaQuery query = '(max-device-width: 1020px)'>
			  		<Layout>
			  			<MobileIndex />
			  		</Layout>
			  	</MediaQuery>
		  	</div>
		);
	};
}


ReactDOM.render(<Root/>,document.getElementById("mainContainer"));
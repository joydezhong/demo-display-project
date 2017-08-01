import React from 'react';
import ReactDOM from 'react-dom';

import {Router,Route,hashHistory} from 'react-router';

import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

import PCHeader from './components/pc_header';
import PCContent from './components/pc_content';
import PCFooter from './components/pc_footer';

const { Header, Content, Footer } = Layout;

export default class Root extends React.Component{
	render(){
		  return (

		  	<Layout>
		  		<PCHeader />
		  		<PCContent />
		  		<PCFooter />
		  	</Layout>

		);
	};
}


ReactDOM.render(<Root/>,document.getElementById("mainContainer"));
import React from 'react';
import ReactDOM from 'react-dom';

import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCContent from './pc_content';

export default class PCIndex extends React.Component{
	render(){
		  return (
        	<div>
                <PCHeader />
				<PCContent />
				<PCFooter />
            </div>
		);
	};
}

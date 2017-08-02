import React from 'react';
import ReactDOM from 'react-dom';

import MobileHeader from './mobile_header';
import MobileContent from './mobile_content';
import MobileFooter from './mobile_footer';

import {Tabs,Carousel} from 'antd';

const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component{
	render(){
		const setting = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
		  return (
        	<div>
                <MobileHeader></MobileHeader>
				<Tabs className="m-tabs">
					<TabPane tab="首页" key="1">
						<div class="m_carousel">
                            <Carousel {...setting}>
                                <div>
                                    <img src="./src/images/banner01.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="./src/images/banner02.png" alt="" />
                                </div>
                            </Carousel>
                        </div>
                        <MobileContent />
					</TabPane>
					<TabPane tab="博客" key="2">
						<MobileContent />
					</TabPane>
					<TabPane tab="Github" key="3">
						<MobileContent />
					</TabPane>
					<TabPane tab="关于" key="4">
						<MobileContent />
					</TabPane>
				</Tabs>
				<MobileFooter></MobileFooter>
            </div>
		);
	};
}

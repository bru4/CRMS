import React from 'react';
import { connect } from 'react-redux';
import { Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router';

function mapStateToProps(state) {
	return {

	};
}

const Nav = (props) =>
<div className='nav-index'>
	<div className="layout-top">
		<div className="layout-header">
		<div className="layout-wrapper">
			<div className="layout-logo"></div>
			<Menu theme="dark" mode="horizontal"
				defaultSelectedKeys={['0']} style={{lineHeight: '64px'}}>
				<Menu.Item key="0"><Link to='/crmsadmin'>首页</Link></Menu.Item>
				<Menu.Item key="1"><Link to='/crmsadmin/trial'>试用活动</Link></Menu.Item>
				<Menu.Item key="2"><Link to='/crmsadmin/member'>会员管理</Link></Menu.Item>
				<Menu.Item key="3"><Link to='/crmsadmin/order'>订单系统</Link></Menu.Item>
				<Menu.Item key="4"><Link to='/crmsadmin/tag'>标签管理</Link></Menu.Item>
			</Menu>
		</div>
		</div>
		<div className="layout-subheader">
		<div className="layout-wrapper">
			<Menu mode="horizontal"
			defaultSelectedKeys={['1']} style={{marginLeft: 124}}>
				<Menu.Item key="1">二级导航</Menu.Item>
				<Menu.Item key="2">二级导航</Menu.Item>
				<Menu.Item key="3">二级导航</Menu.Item>
			</Menu>
		</div>
		</div>
		<div className="layout-wrapper">
		<Breadcrumb>
			<Breadcrumb.Item>首页</Breadcrumb.Item>
			<Breadcrumb.Item>应用列表</Breadcrumb.Item>
			<Breadcrumb.Item>某应用</Breadcrumb.Item>
		</Breadcrumb>
		</div>
	</div>
</div>

export default connect(
	mapStateToProps,
	// Implement map dispatch to props
)(Nav)
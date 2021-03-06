import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router'

function NavHeader ({title, cur}) {
	return (
		<div className="layout-wrapper">
			<div className="layout-logo">有点火会员管理系统</div>
			<Menu theme="dark" mode="horizontal"
				defaultSelectedKeys={[cur]}
				selectedKeys={[cur]}
				style={{lineHeight: '64px'}}>
				{
					title.map(t=><Menu.Item key={t.name}><Link to={t.path}>{t.title}</Link></Menu.Item>)
				}
			</Menu>
		</div>
	)
}

export default NavHeader;

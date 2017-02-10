import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router'

const NavSubheader = ({ title, cur }) =>
<div className="layout-wrapper">
	<Menu mode="horizontal"
	selectedKeys={[cur]} style={{marginLeft: 345}}>
	{
		title && title.children.map(t => {
			return(
				<Menu.Item key={t.name}>
					<Link to={t.path}>{t.title}</Link>
				</Menu.Item>
			)
		})
	}
	</Menu>
</div>

export default NavSubheader
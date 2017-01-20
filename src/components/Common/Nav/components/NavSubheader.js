import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router'

const NavSubheader = ({ title, cur }) =>{
	console.log(title);
return <div className="layout-wrapper">
	<Menu mode="horizontal"
	selectedKeys={[cur]} style={{marginLeft: 345}}>
	{
		title[0] && title[0].children.map((t)=><Menu.Item key={t.name}><Link to={t.path}>{t.title}</Link></Menu.Item>)
	}
	</Menu>
</div>
}

export default NavSubheader
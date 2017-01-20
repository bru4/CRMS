import React from 'react';
import { Breadcrumb } from 'antd';

const NavBreakcrumb = ({title, cur})=>
<Breadcrumb>
	<Breadcrumb.Item>{cur[0]==='index'?'首页':title[0].title}</Breadcrumb.Item>
	{
		cur[1]==='index'?<Breadcrumb.Item></Breadcrumb.Item>:<Breadcrumb.Item>{title[0].children.filter(t=>t.name===cur[1])[0].title}</Breadcrumb.Item>
	}
</Breadcrumb>

export default NavBreakcrumb
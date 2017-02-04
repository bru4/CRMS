import React from 'react';
import { Breadcrumb } from 'antd';

const NavBreakcrumb = ({titleList})=>
<Breadcrumb>
	{
		titleList.map((t,i)=><Breadcrumb.Item key={i}>{t}</Breadcrumb.Item>)
	}
</Breadcrumb>

export default NavBreakcrumb
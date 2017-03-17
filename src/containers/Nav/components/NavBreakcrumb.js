import React from 'react';
import { Breadcrumb } from 'antd';

function NavBreakcrumb ({titleList}) {
	return (
		<div className="layout-wrapper">
		<Breadcrumb>
			{
				titleList.map((t,i)=><Breadcrumb.Item key={i}>{t}</Breadcrumb.Item>)
			}
		</Breadcrumb>
		</div>
	)
}
export default NavBreakcrumb
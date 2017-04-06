import React from 'react';
import { Breadcrumb } from 'antd';

function NavBreakcrumb ({titleList}) {
	return (
		<div className="layout-wrapper">
		<Breadcrumb>
			<Breadcrumb.Item>首页</Breadcrumb.Item>
			{
				titleList.map((t, i) => t === 'index' ? null : <Breadcrumb.Item key={i}>{t}</Breadcrumb.Item>)
			}
		</Breadcrumb>
		</div>
	)
}
export default NavBreakcrumb
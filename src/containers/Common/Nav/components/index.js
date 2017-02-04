import React from 'react';
import { connect } from 'react-redux';

import { title } from '../constants';
import { getSubtitle, gettitleList } from '../selectors'

import NavHeader from './NavHeader';
import NavSubheader from './NavSubheader';
import NavBreakcrumb from './NavBreakcrumb';


function mapStateToProps({nav}) {
	return {
		curtt:nav.title,
		cursubtt:nav.subtitle,
	};
}

const Nav = ({curtt, cursubtt}) =>
<div className='nav-index'>
	<div className="layout-top">
		<div className="layout-header">
			<NavHeader title={title} cur={curtt} />
		</div>
		{
			curtt==='index'?null:
			<div className="layout-subheader">
				<NavSubheader title={getSubtitle(title, curtt)} cur={cursubtt} />
			</div>
		}
		{
			curtt==='index'?null:
			<div className="layout-wrapper">
				<NavBreakcrumb titleList={gettitleList(title, curtt, cursubtt)}/>
			</div>
		}
	</div>
</div>

export default connect(
	mapStateToProps,
	// Implement map dispatch to props
)(Nav)
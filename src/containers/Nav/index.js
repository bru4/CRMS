import React from 'react';
import { connect } from 'react-redux';

//import * as components from './components';
import * as constants from './constants';
import reducer from './reducer';
import * as selectors from './selectors';

import NavHeader from './components/NavHeader';
import NavSubheader from './components/NavSubheader';
import NavBreakcrumb from './components/NavBreakcrumb';

import { title } from './constants';
import { getSubtitle, gettitleList } from './selectors'



function mapStateToProps({nav}) {
	return {
		curtt:nav.title,
		cursubtt:nav.subtitle,
	};
}

const Nav = ({curtt, cursubtt}) =>
<div className='nav-index'>
	<div className="layout-top">
		<div className="nav-header">
			<NavHeader title={title} cur={curtt==='feedback'?'trial':curtt} />
		</div>
		{
			curtt==='index'?null:
			<div className="nav-subheader">
				<NavSubheader title={getSubtitle(title, curtt)} cur={cursubtt} />
			</div>
		}
		{
			curtt==='index'?null:
			<div className="nav-breakcrumb">
				<NavBreakcrumb titleList={gettitleList(title, curtt, cursubtt)}/>
			</div>
		}
	</div>
</div>

export default connect(
	mapStateToProps,
	// Implement map dispatch to props
)(Nav)

export {
    //components,
    constants,
    reducer,
    selectors,
};
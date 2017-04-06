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

function Nav ({curtt, cursubtt}) {
	const subTitle = getSubtitle(title, curtt);
	const titleList = gettitleList(title, curtt, cursubtt);
	return (
		<div className='nav-index'>
			<div className="layout-top">
				<div className="nav-header">
					<NavHeader title={title} cur={curtt==='feedback'?'trial':curtt} />
				</div>
				{
					subTitle.children.length > 0 &&
					<div className="nav-subheader">
						<NavSubheader title={subTitle} cur={cursubtt} />
					</div>
				}
				{
					curtt !== 'index' &&
					<div className="nav-breakcrumb">
						<NavBreakcrumb titleList={titleList}/>
					</div>
				}
			</div>
		</div>
	)
}

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
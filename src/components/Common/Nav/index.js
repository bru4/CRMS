import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { title, subtitle } from './consant'

import NavHeader from './components/NavHeader';
import NavSubheader from './components/NavSubheader';
import NavBreakcrumb from './components/NavBreakcrumb';

function getSubtitle(){

}

function mapStateToProps(state) {
	return {
		curtt:state.nav.title,
		cursubtt:state.nav.subtitle,
	};
}

const Nav = ({curtt, cursubtt}) =>
<div className='nav-index'>
	<div className="layout-top">
		<div className="layout-header">
			<NavHeader title={title} cur={curtt} />
		</div>
		{
			curtt==='index'?null:<div className="layout-subheader">
				<NavSubheader title={title.filter(t=>t.name===curtt)} cur={cursubtt} />
			</div>
		}
		<div className="layout-wrapper">
			<NavBreakcrumb title={title.filter(t=>t.name===curtt)} cur={[curtt,cursubtt]} />
		</div>
	</div>
</div>

export default connect(
	mapStateToProps,
	// Implement map dispatch to props
)(Nav)
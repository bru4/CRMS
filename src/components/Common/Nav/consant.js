export const title = [{
	title: '首页',
	name: 'index',
	path: '/crmsadmin',
	children: []
}, {
	title: '试用',
	name: 'trial',
	path: '/crmsadmin/trial/trialreview',
	children: [{
		title: '试用审核',
		name: 'trialreview',
		path: '/crmsadmin/trial/trialreview'
	}, {
		title: '全部试用',
		name: 'trialall',
		path: '/crmsadmin/trial/trialall'
	}, {
		title: '反馈审核',
		name: 'feedbackreview',
		path: '/crmsadmin/trial/feedbackreview'
	}, {
		title: '全部反馈',
		name: 'feedbackall',
		path: '/crmsadmin/trial/feedbackall'
	}]
}, {
	title: '会员',
	name: 'member',
	path: '/crmsadmin/member/memberreview',
	children: [{
		title: '认证审核',
		name: 'memberreview',
		path: '/crmsadmin/member/memberreview'
	}, {
		title: '全部会员',
		name: 'memberall',
		path: '/crmsadmin/member/memberall'
	}]
}, {
	title: '订单',
	name: 'order',
	path: '/crmsadmin/order/0',
	children: [{
		title: '订单',
		name: '0',
		path: '/crmsadmin/order/0'
	}]
}, {
	title: '标签',
	name: 'tag',
	path: '/crmsadmin/tag/0',
	children: [{
		title: '标签',
		name: '0',
		path: '/crmsadmin/tag/0'
	}]
}];
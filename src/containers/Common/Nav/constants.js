export const title = [{
	title: '首页',
	name: 'index',
	path: '/crmsadmin',
	children: []
}, {
	title: '试用管理',
	name: 'trial',
	path: '/crmsadmin/trial/review',
	children: [{
		title: '试用审核',
		name: 'review',
		path: '/crmsadmin/trial/review'
	}, {
		title: '全部试用',
		name: 'all',
		path: '/crmsadmin/trial/all'
	}, {
		title: '反馈审核',
		name: 'feedbackreview',
		path: '/crmsadmin/feedback/feedbackreview'
	}, {
		title: '全部反馈',
		name: 'feedbackall',
		path: '/crmsadmin/feedback/feedbackall'
	}]
}, {
	title: '会员管理',
	name: 'member',
	path: '/crmsadmin/member/review',
	children: [{
		title: '餐饮审核',
		name: 'review',
		path: '/crmsadmin/member/review'
	}, {
		title: '全部会员',
		name: 'all',
		path: '/crmsadmin/member/all'
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
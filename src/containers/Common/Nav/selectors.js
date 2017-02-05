import { createSelector } from 'reselect'

export const pageTitleSelector = state => state.nav.title;
export const pageSubtitleSelector = state => state.nav.subtitle;
export const getSubtitle = (title, curtt) => title.filter(t => t.name === curtt)[0];
export const gettitleList = (title, curtt, cursubtt) => {
	let result = [],
		cur = title.filter(t => t.name === curtt)[0];
	result.push(cur.title);
	result.push(cur.children.filter(t => t.name === cursubtt)[0].title);
	return result;
}
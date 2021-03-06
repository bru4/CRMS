import { createSelector } from 'reselect'

export const pageTitleSelector = state => state.nav.title;
export const pageSubtitleSelector = state => state.nav.subtitle;
export const getSubtitle = (title, curtt) => {
    if (curtt === 'feedback') {
        curtt = 'trial';
    }
    return title.filter(t => t.name === curtt)[0];
};
export const gettitleList = (title, curtt, cursubtt) => {
    if (curtt === 'feedback') {
        curtt = 'trial';
    }
    let result = [],
        cur = title.filter(t => t.name === curtt)[0],
        curChildren = cur.children.filter(t => t.name === cursubtt)[0];
    result.push(cur ? cur.title : 'index');
    result.push(curChildren ? curChildren.title : 'index');
    return result;
}
export const typeSelector = createSelector(
    pageSubtitleSelector,
    subtitle => subtitle.includes('all')?'all':'review'
)
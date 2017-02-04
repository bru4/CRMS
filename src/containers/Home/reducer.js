const HomeReducer = (state = 0, action) => {
	let type = action.type,
		data = action.payload;
	switch (type) {
		case 'ADD':
			return ++state;
		default:
			return state;
	}
}
export default HomeReducer
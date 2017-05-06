export const loadData = (params) => {
	console.log('contant action :', params,98989);
	return {
		type:'GET_DATA',
		params:params
	};
	
}
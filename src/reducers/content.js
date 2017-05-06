export const Content = (state = {},action)=>{
	console.log('content reducer called with state ', state , ' and action ', action);
	switch(action.type){
		case 'GET_DATA':
			return {
				...state,
				data:action.params.tData,
				loading:action.params.loading
			}
		default:
			return state;
	}
}
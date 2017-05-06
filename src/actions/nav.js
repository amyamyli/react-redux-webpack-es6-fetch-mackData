export const loadData = (type) => {
	console.log(type,888899)
	switch(type){
		case 'TYPE1':
			return {
				type: type,
				data:'tab1'
			}
		case 'TYPE2':
			return {
				type: type,
				data:'tab2'
			}
		case 'TYPE3':
			return {
				type: type,
				data:'tab3'
			}
		default: 
			return{
				type:'default',
				data:'无'
			}
	}
}
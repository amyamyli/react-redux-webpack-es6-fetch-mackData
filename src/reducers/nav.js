export const Nav = (state = {},action)=>{
  console.log('nav reducer called with state ', state , ' and action ', action);
  switch(action.type){
    case 'TYPE1':
      return {
        ...state,
        value:action.data
      }
    case 'TYPE2':
      return {
        ...state,
        value:action.data
      }
    case 'TYPE3':
      return {
        ...state,
        value:action.data
      }
    default:
      return state;
  }
}
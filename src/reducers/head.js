export const Head = (state = {}, action) => {
  console.log('head reducer called with state ', state , ' and action ', action);
  switch (action.type) {
    case 'GET_TIME_REQUEST':
      return {
        ...state,
        frozen: true
      }
    case 'GET_TIME_SUCCESS':
      return {
        ...state,
        time: action.result.time,
        frozen: false
      }
    case 'GET_TIME_FAILURE':
        // 这里我们可以添加一个错误消息，打印到我们应用程序的某个地方
      return {
        ...state,
        frozen: false
      }
    default:
      return state
  }
}
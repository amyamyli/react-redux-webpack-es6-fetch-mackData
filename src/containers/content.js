import { connect } from 'react-redux';
import * as actions from '../actions/content';
import Content from '../components/content';


const mapStateToProps = (state/*, props*/) => {
  console.log(state,100001);
  return {
    value: state.Nav.value,
    tabData:state.Content.data,
    // 像 (reduxState: state) 这样提供整个 state 是一种不好的实现,
    // 我们在这里这样写是为了让大家能看到我们页面字符串化的结果。更多信息请访问以下链接:
    // https://github.com/reactjs/react-redux/blob/master/docs/api.md#inject-dispatch-and-every-field-in-the-global-state
    reduxState: state
  }
}

const mapDispatchToProps = (dispatch/*, props*/) => {
  return {
    getData: (params) => dispatch(actions.loadData(params))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Content);


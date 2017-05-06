import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/nav';
import Nav from '../components/nav';

// 这是我们的 select 函数, 它会把我们需要在属性 (prop) 中对我们的组件暴露的数据从 state 中抽离出来
const mapStateToProps = (state/*, props*/) => {
  console.log(state,1111);
  return {
    value: state.Nav.value,
    // 像 (reduxState: state) 这样提供整个 state 是一种不好的实现,
    // 我们在这里这样写是为了让大家能看到我们页面字符串化的结果。更多信息请访问以下链接:
    // https://github.com/reactjs/react-redux/blob/master/docs/api.md#inject-dispatch-and-every-field-in-the-global-state
    reduxState: state
  }
}

// 这是我们的 select 函数
const mapDispatchToProps = (dispatch/*, props*/) => {
  return {
    onclick: (type) => dispatch(actions.loadData(type))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Nav);
import { Link } from 'react-router';
import { HashRouter, Route, browserHistory } from 'react-router-dom';
import React from 'react';
import Style from '../css/content';
import TabOne from './tab1';
import TabTwo from './tab2';
import TabThree from './tab3';
 
 class Content extends React.Component{
 	// 获取表格数据
    fetchTabData = () => {
        fetch('../src/data/tabData.json')
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { const params = {loading:false,tData:data.rowData};this.props.getData(params);})
            .catch((e) => { console.log(e.message);});
    }    
    componentWillMount(){
    	const params = {loading:true,tData:[]};this.props.getData(params);
    }

 	componentDidMount(){
 		this.fetchTabData();
 	}

 	render(){
 		console.log(this.props.value,99999);
 		const {value,tabData} = this.props;
 		console.log(value,3333);
 		return (
 				<div className="content">
		 				<Route path="/typeOne" component={TabOne} />
		 				<Route path="/typeTwo" component={TabTwo} />
		 				<Route path="/typeThree" component={TabThree} />
		 				<div>{ JSON.stringify(tabData, null, 2)}</div>
 				</div>
 			);
 	}
 }

 export default Content ;

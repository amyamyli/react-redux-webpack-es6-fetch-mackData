import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../css/nav';

class Nav extends React.Component{

	 typeClick = (type) =>{
		this.props.onclick(type);
	}
	
	render(){
		const {value,reduxState} = this.props;
		return (
			<div className="nav">
				<ul>
					<Link to="/typeOne"><li onClick={() => this.typeClick('TYPE1')}>type1</li></Link>
					<Link to="/typeTwo"><li onClick={() => this.typeClick('TYPE2')}>type2</li></Link>
					<Link to="/typeThree"><li onClick={() => this.typeClick('TYPE3')}>type3</li></Link>
				</ul>
				<div>{value} redux state = { JSON.stringify(reduxState, null, 2) }</div>
			</div>
		);
	}
}

export default Nav ;
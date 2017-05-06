import React from 'react';
//import Head from './head';
import Nav from './nav';
import Content from './content';
//import Foot from './foot';

class App extends React.Component{
	
	render(){
		return (
			<div>
				
				<Nav />
				<Content/>
				
			</div>
			);
	}
}


export default App;
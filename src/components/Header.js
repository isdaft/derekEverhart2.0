import React from 'react';
import { Link } from 'gatsby';
import 'semantic-ui-less/semantic.less';

class Header extends React.Component {
	
	render(){
	
		return (
			
			<div className="ui vertical menu">
				<Link to="/" className="item">Home</Link>
				<Link to="/gallery/" className="item">Gallery</Link>
				<Link to="/about/" className="item">About</Link>
				<Link to="/contact/" className="item">Contact</Link>
			</div>
			
		);


	}

	
}

export default Header; 
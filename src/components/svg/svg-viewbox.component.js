import React, {Component} from 'react';



export default class SVGViewbox extends Component {

	// constructor(props) {
	// 	super(props);
	// }
	
    render () {
		return (
			<svg
				style={{ background: '#222222' }}
				width="100%"
				height="2000px"
				xmlns="http://www.w3.org/2000/svg"
			>
				{this.props.children}
			</svg>
		);
	}

}


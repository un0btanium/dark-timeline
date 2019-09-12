import React, {Component} from 'react';



export default class Rectangle extends Component {

	// constructor(props) {
	// 	super(props);
	// }
	
    render () {
		return (
			<rect
				x={40} y={15}
				width={30} height={65}
				fill="lightblue"
			/>
		);
	}

}


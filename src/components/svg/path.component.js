import React, {Component} from 'react';



export default class Path extends Component {

	// constructor(props) {
	// 	super(props);
	// }
	
    render () {
		return (
			<path
				d={`
					M 100,100
					L 200,100
					L 200,200
					L 100,200
					L 100,100
				`}
				/>
		);
	}

}


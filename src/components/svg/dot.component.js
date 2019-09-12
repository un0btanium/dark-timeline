import React, {Component} from 'react';



export default class Dot extends Component {

	// constructor(props) {
	// 	super(props);
	// }
	
    render () {
		return (
			<ellipse
				cx={30} cy={60}
				rx={20} ry={20}
				fill="lightsalmon"
			/>
		);
	}

}


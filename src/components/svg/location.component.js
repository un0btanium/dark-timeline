import React, {Component} from 'react';



export default class Location extends Component {

	constructor(props) {
		super(props);

		this.state = {
			color: "#444444"
		}
	}
	
    render () {
		return (
			<>
				<rect
					x={200} y={this.props.location.y-10}
					width={1800} height={this.props.location.height}
					fill={this.state.color}
					onMouseEnter={() => this.setState({ color: "#555555" })}
					onMouseLeave={() => this.setState({ color: "#444444" })}
				/>
				<text
					x={205}
					y={this.props.location.y+(this.props.location.height/2)-5}
					fill="#FFFFFF"
					style={{ fontFamily: "Courier"}}
				>
					{this.props.location.displayName}
				</text>
			</>
		);
	}

}


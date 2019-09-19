import React, {Component} from 'react';

import SVGViewbox from './svg/svg-viewbox.component';
import CharacterLine from './svg/character-line.component';
import Location from './svg/location.component';


import locations from '../data/locations';
import characterColors from '../data/characterColors';

import day15_11_2019 from '../data/days/15.11.2019';
import day21_06_2019 from '../data/days/21.06.2019';

export default class Timeline extends Component {

	constructor(props) {
		super(props);



		/*
			Connection Types:
				- Horizontal Line (x End)
				- Vertical Line (Timetravel) (y Start y End)
				- Connection (Travel) (y End x constant or dynamic based on y)
				- Arrival (x Start y Start)
				- Exit

			Connections always start at the previous point

			Connections have 'from' episode number 'to' episode number ( so we can swap them out in case information and connections are added)
			Events too so we can update them with additional information 


			connections: [
				{
					type: "idle | timetravel | travel | arrival | exit",
					episodeFrom: number (from which epsiode onwards is this connection shown)
					episodeTo: number, (until which episode is this connection shown? then replaced by another)
					// date: { day, month, (year) } (maybe group connections by day, then only year for y coord is relevant)
					// time: { start and/or end hourminute information which is then transformed into coords }
					coords: { point information based on connection type (see above) }
					groupdID: number
				}
			]
			events: [
				{

				}
			]

		*/

		this.onCharacterHover = this.onCharacterHover.bind(this);


		this.state = {
			episode: 1,
			// currentDay: 15,
			// currentMonth: 11,
			currentDay: 21,
			currentMonth: 6,
			data: {
				11: {
					15: day15_11_2019
				},
				6: {
					21: day21_06_2019
				}
			},
			locations: locations,
			characterColors: characterColors,

			hoveredCharacter: undefined
		};
	}
	
    render () {

		let locations = [];
		for (var year of [2019, 1986]) {
			for (var locationName in this.state.locations[year]) {
				locations.push(<Location 
					location={this.state.locations[year][locationName]}
					key={"Location" + locationName + year}
					year={year}
				/>);
			}
		}

		let characterLines = this.state.data[this.state.currentMonth][this.state.currentDay].characters.map((character, i) => {
			return (
				<CharacterLine 
					character={character}
					locations={this.state.locations}
					color={this.state.characterColors[character.name]}
					onCharacterHover={this.onCharacterHover}
					hoveredCharacter={this.state.hoveredCharacter}
					key={"CharacterLine"+i}
				/>
			);
		})

		return (
			<SVGViewbox>
				{locations}
				{characterLines}
			</SVGViewbox>
		);
	}


	onCharacterHover(characterName) {
		this.setState({
			hoveredCharacter: characterName
		})
	}

}


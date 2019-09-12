var data = {
	characters: [
		{
			name: "Jonas",
			lines: [
				{ type: "arrival", year: 2019, location: "Bridge", time: 800, offset: 0 },
				{ type: "travel", location: "Nielsen Home", time: 1200, offset: 0 }
			]
		},
		{
			name: "Jonas",
			lines: [
				{ type: "arrival", year: 2019, location: "Nielsen Home", time: 800, offset: 0 },
				{ type: "exit", location: "Nielsen Home", time: 1100, offset: 0 }
			]
		},
		{
			name: "Martha",
			lines: [
				{ type: "arrival", year: 2019, location: "Bridge", time: 800, offset: 5 },
				{ type: "travel", location: "Nielsen Home", time: 1200, offset: 5 }
			]
		},
		{
			name: "Magnus",
			lines: [
				{ type: "arrival", year: 2019, location: "Bridge", time: 600, offset: 15 },
				{ type: "travel", location: "Forrest", time: 800, offset: 0 },
				{ type: "travel", location: "Caves", time: 830, offset: 0 },
				{ type: "travel", location: "Wormhole", time: 900, offset: 0 },
				{ type: "timetravel", year: 1986, location: "Wormhole", time: 930, offset: 0 },
				{ type: "exit", location: "Nielsen Home", time: 1500, offset: 0 }
			]
		}
	],
	events: [
		{

		}
	]
}

// convert 60 minutes into 100s
for (var i in data.characters) {
	for (var j in data.characters[i].lines) {
		let time = data.characters[i].lines[j].time;
		time = (time - (time % 100.0)) + ((time % 100.0) * (100.0/60.0));
		data.characters[i].lines[j].time = time;
	}
}


export default data;
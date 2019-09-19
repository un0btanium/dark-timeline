var data = {
	date: {
		day: 21,
		month: 6
	},
	characters: [
		{
			name: "Mikkel",
			lines: [
				{ type: "idle", year: 2019, location: "Kahnwald Home", time: 1015, offset: 30 },
				{ type: "idle", location: "Kahnwald Home", time: 2100, offset: 5 }
			]
		},
		{
			name: "Mikkel",
			lines: [
				{ type: "idle", year: 2019, location: "Nielsen Home", time: 930, offset: 25 },
				{ type: "travel", location: "Kahnwald Home", time: 1100, offset: 15 },
				{ type: "travel", location: "Kahnwald Home", time: 1130, offset: 25 },
				{ type: "travel", location: "Kahnwald Home", time: 1145, offset: 15 },
				{ type: "travel", location: "Hospital", time: 1200, offset: 10 },
				{ type: "travel", location: "Street", time: 1345, offset: 10 },
				{ type: "travel", location: "Nielsen Home", time: 1425, offset: 0 },
				{ type: "idle", location: "Nielsen Home", time: 2400, offset: 0 },
			]
		},
		{
			name: "Ulrich",
			lines: [
				{ type: "idle", year: 2019, location: "Nielsen Home", time: 930, offset: 15 },
				{ type: "travel", location: "Kahnwald Home", time: 1110, offset: 5 },
				{ type: "travel", location: "Hospital", time: 1210, offset: 0 },
				{ type: "travel", location: "Street", time: 1355, offset: 0 },
				{ type: "travel", location: "Nielsen Home", time: 1420, offset: 7 },
				{ type: "travel", location: "Nielsen Home", time: 2200, offset: 60 },
				{ type: "idle", location: "Nielsen Home", time: 2400, offset: 60 },
			]
		},
		{
			name: "Katarina",
			lines: [
				{ type: "idle", year: 2019, location: "Nielsen Home", time: 930, offset: 20 },
				{ type: "travel", location: "Kahnwald Home", time: 1105, offset: 10 },
				{ type: "travel", location: "Hospital", time: 1205, offset: 5 },
				{ type: "travel", location: "Street", time: 1350, offset: 5 },
				{ type: "travel", location: "Nielsen Home", time: 1420, offset: 14 },
				{ type: "travel", location: "Nielsen Home", time: 2200, offset: 5 },
				{ type: "idle", location: "Nielsen Home", time: 2400, offset: 5 },
			]
		},
		{
			name: "Hannah",
			lines: [
				{ type: "idle", year: 2019, location: "Kahnwald Home", time: 1015, offset: 25 },
				{ type: "travel", year: 2019, location: "Kahnwald Home", time: 1115, offset: 0 },
				{ type: "travel", year: 2019, location: "Kahnwald Home", time: 1155, offset: 25 },
				{ type: "travel", year: 2019, location: "Nielsen Home", time: 1700, offset: 33 },
				{ type: "travel", year: 2019, location: "Nielsen Home", time: 2200, offset: 55 },
				{ type: "travel", location: "Kahnwald Home", time: 2330, offset: 10 },
				{ type: "idle", location: "Kahnwald Home", time: 2400, offset: 10 }
			]
		},
		{
			name: "Jonas",
			lines: [
				{ type: "idle", year: 2019, location: "Kahnwald Home", time: 1015, offset: 35 },
				{ type: "travel", location: "Street", time: 1053, offset: 0 },
				{ type: "travel", location: "See", time: 1130, offset: 0 },
				{ type: "travel", location: "Ines Home", time: 1300, offset: 0 },
				{ type: "travel", location: "Kahnwald Home", time: 1500, offset: 0 },
				{ type: "travel", location: "Nielsen Home", time: 1700, offset: 25 },
				{ type: "travel", location: "Kahnwald Home", time: 2330, offset: 5 },
				{ type: "idle", location: "Kahnwald Home", time: 2400, offset: 5 }
			]
		},
		{
			name: "Jonas",
			lines: [
				{ type: "idle", year: 1986, location: "Church", time: 1000, offset: 0},
				{ type: "timetravel", year: 2019, location: "Church", time: 1200, offset: 0 },
				{ type: "travel", location: "See", time: 1300, offset: 0 },
				{ type: "travel", location: "Street", time: 1335, offset: 15 },
				{ type: "travel", location: "Kahnwald Home", time: 1800, offset: 35 },
				{ type: "exit", location: "Kahnwald Home", time: 2030, offset: 35, downwards: true },
			]
		},
		{
			name: "Jonas",
			lines: [
				{ type: "idle", year: 1986, location: "Church", time: 1000, offset: 5},
				{ type: "idle", location: "Church", time: 2200, offset: 5 },
			]
		},
		{
			name: "Claudia",
			lines: [
				{ type: "arrival", year: 2019, location: "Kahnwald Home", time: 2000, offset: 40, upwards: true},
				{ type: "exit", location: "Kahnwald Home", time: 2030, offset: 40, downwards: true },
			]
		},
		{
			name: "Martha",
			lines: [
				{ type: "idle", year: 2019, location: "Nielsen Home", time: 930, offset: 0 },
				{ type: "travel", year: 2019, location: "Street", time: 1030, offset: 5 },
				{ type: "travel", location: "See", time: 1125, offset: 5 },
				{ type: "travel", location: "See", time: 1200, offset: 8 },
				{ type: "travel", location: "See", time: 1230, offset: 5 },
				{ type: "travel", location: "Nielsen Home", time: 1530, offset: 21 },
				{ type: "idle", location: "Nielsen Home", time: 2400, offset: 21 }
			]
		},
		{
			name: "Magnus",
			lines: [
				{ type: "idle", year: 2019, location: "Nielsen Home", time: 930, offset: 5 },
				{ type: "travel", year: 2019, location: "Street", time: 1025, offset: 10 },
				{ type: "travel", location: "See", time: 1115, offset: 18 },
				{ type: "travel", location: "See", time: 1245, offset: 23 },
				{ type: "travel", location: "See", time: 1300, offset: 18 },
				{ type: "travel", location: "Nielsen Home", time: 1530, offset: 40 },
				{ type: "idle", location: "Nielsen Home", time: 2400, offset: 40 }
			]
		},
		{
			name: "Magnus",
			lines: [
				{ type: "idle", year: 1986, location: "Church", time: 1000, offset: 10},
				{ type: "idle", location: "Church", time: 2200, offset: 10 },
			]
		},
		{
			name: "Franziska",
			lines: [
				{ type: "arrival", year: 2019, location: "See", time: 1300, offset: 28, upwards: true },
				{ type: "exit", location: "See", time: 1310, offset: 31, downwards: true },
			]
		},
		{
			name: "Franziska",
			lines: [
				{ type: "idle", year: 1986, location: "Church", time: 1000, offset: 15},
				{ type: "idle", location: "Church", time: 2200, offset: 15 },
			]
		},
		{
			name: "Bartosz",
			lines: [
				{ type: "arrival", year: 2019, location: "Street", time: 1115, offset: 15, upwards: true },
				{ type: "travel", location: "See", time: 1115, offset: 13 },
				{ type: "travel", location: "See", time: 1515, offset: 10 },
				{ type: "exit", location: "See", time: 1534, offset: 10 }
			]
		},
	],
	events: [
		{

		}
	]
}

// convert 60 minutes into 100
for (var i in data.characters) {
	for (var j in data.characters[i].lines) {
		let time = data.characters[i].lines[j].time;
		time = (time - (time % 100.0)) + ((time % 100.0) * (100.0/60.0));
		data.characters[i].lines[j].time = time;
	}
}


export default data;
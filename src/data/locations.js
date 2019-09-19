var data = {
	2019: {
		"Nielsen Home": {
			displayName: "Nielsen Home",
			description: "Some sample text",
			height: 75
		},
		"Kahnwald Home": {
			displayName: "Kahnwald Home",
			description: "Some sample text",
			height: 75
		},
		"Ines Home": {
			displayName: "Ines Home",
			description: "Some sample text",
			height: 30
		},
		"Hospital": {
			displayName: "Hospital",
			description: "Some sample text",
			height: 30
		},
		"Street": {
			displayName: "Street",
			description: "Some sample text",
			height: 50
		},
		"See": {
			displayName: "See",
			description: "Some sample text",
			height: 50
		},
		"Church": {
			displayName: "Curch",
			description: "Some sample text",
			height: 50
		},
	},
	1986: {
		"Nielsen Home": {
			displayName: "Nielsen Home",
			description: "Some sample text",
			height: 75
		},
		"Kahnwald Home": {
			displayName: "Kahnwald Home",
			description: "Some sample text",
			height: 75
		},
		"Ines Home": {
			displayName: "Ines Home",
			description: "Some sample text",
			height: 30
		},
		"Hospital": {
			displayName: "Hospital",
			description: "Some sample text",
			height: 30
		},
		"Street": {
			displayName: "Street",
			description: "Some sample text",
			height: 50
		},
		"See": {
			displayName: "See",
			description: "Some sample text",
			height: 50
		},
		"Church": {
			displayName: "Curch",
			description: "Some sample text",
			height: 50
		},
	}
};


let yearOrder = [2019, 1986];

let y = 25;
for (var year of yearOrder) {
	for (var locationName in data[year]) {
		data[year][locationName].y = y;
		y += data[year][locationName].height + 5;
	}
	y += 50;
}


export default data;
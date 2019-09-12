var data = {
	2019: {
		"Nielsen Home": {
			displayName: "Nielsen Home",
			description: "Some sample text",
			height: 75
		},
		"Street": {
			displayName: "Street",
			description: "Some sample text",
			height: 40
		},
		"Bridge": {
			displayName: "Bridge",
			description: "Some sample text",
			height: 40
		},
		"Forrest": {
			displayName: "Forrest",
			description: "Some sample text",
			height: 40
		},
		"Caves": {
			displayName: "Caves",
			description: "Some sample text",
			height: 40
		},
		"Wormhole": {
			displayName: "Einstein-Rosen Bridge",
			description: "Some sample text",
			height: 40
		},
	},
	1986: {
		"Nielsen Home": {
			displayName: "Nielsen Home",
			description: "Some sample text",
			height: 75
		},
		"Street": {
			displayName: "Street",
			description: "Some sample text",
			height: 40
		},
		"Bridge": {
			displayName: "Bridge",
			description: "Some sample text",
			height: 40
		},
		"Forrest": {
			displayName: "Forrest",
			description: "Some sample text",
			height: 40
		},
		"Caves": {
			displayName: "Caves",
			description: "Some sample text",
			height: 40
		},
		"Wormhole": {
			displayName: "Einstein-Rosen Bridge",
			description: "Some sample text",
			height: 40
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
const data = {
	board: [
		{
			id: 'LA',
			title: 'First List',
			cards: [
				{
					id: 'LA-1',
					title: 'A nice Card',
					tasks: []
				},
				{
					id: 'LA-2',
					title: 'Another nice Card',
					tasks: []
				},
				{
					id: 'LA-3',
					title: 'This card have more content than the others',
					tasks: []
				},
			],
		},
		{
			id: 'LB',
			title: 'Second List',
			cards: [
				{
					id: 'LB-1',
					title: 'This is the first card of the second list',
					label: 'red',
					tasks: [
						{ description: 'Some nice task', done: false },
						{ description: 'Some nice task', done: true },
						{ description: 'Some nice task', done: true },
						{ description: 'Some nice task', done: false },
						{ description: 'Some nice task', done: false },
					],
				},
				{
					id: 'LB-2',
					title: 'I dont fucking know what to put here, so its completely random',
					label: 'green',
					tasks: [
						{ description: 'Some nice task', done: false },
						{ description: 'Some nice task', done: true },
						{ description: 'Some nice task', done: false },
						{ description: 'Some nice task', done: false },
						{ description: 'Some nice task', done: false },
					],
				},
				{
					id: 'LB-3',
					title: 'Syka Blyat!!!!',
					label: 'blue',
					tasks: [
						{ description: 'Some nice task', done: true },
						{ description: 'Some nice task', done: true },
						{ description: 'Some nice task', done: true },
						{ description: 'Some nice task', done: true },
						{ description: 'Some nice task', done: false },
					],
				},
			],
		},
		// {
		// 	id: 'LC',
		// 	title: 'The Last List...For Now',
		// 	cards: [
		// 		{ id: 'LC-1', title: 'A nice Card, but its the end' },
		// 		{ id: 'LC-2', title: 'Another nice Card' },
		// 		{
		// 			id: 'LC-3',
		// 			title: 'This card have more content than the othesr',
		// 		},
		// 	],
		// },
	],
};

export default data;

const data = {
	board: [
		{
			id: Math.random(),
			title: 'First List',
			cards: [
				{
					id: Math.random() * Math.random(),
					title: 'A nice Card',
				},
				{
					id: Math.random() * Math.random(),
					title: 'Another nice Card',
				},
				{
					id: Math.random() * Math.random(),
					title: 'This card have more content than the others',
				},
			],
		},
		{
			id: Math.random(),
			title: 'Second List',
			cards: [
				{
					id: Math.random() * Math.random(),
					title: 'This is the first card of the second list',
				},
				{
					id: Math.random() * Math.random(),
					title: 'I dont fucking know what to put here, so its completely random',
				},
				{ id: Math.random() * Math.random(), title: 'Syka Blyat!!!!' },
			],
		},
		{
			id: Math.random(),
			title: 'The Last List...For Now',
			cards: [
				{ id: Math.random() * Math.random(), title: 'A nice Card, but its the end' },
				{ id: Math.random() * Math.random(), title: 'Another nice Card' },
				{
					id: Math.random() * Math.random(),
					title: 'This card have more content than the othesr',
				},
			],
		},
	],
};

export default data;

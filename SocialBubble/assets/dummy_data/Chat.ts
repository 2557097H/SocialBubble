export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'John',
	}, {
		id: 'u2',
		name: 'David',
	}],
	messages: [{
		id: 'm1',
		content: 'Yes lad',
		user: {
			id: 'u1',
			name: 'John',
		},
	}, {
		id: 'm2',
		content: 'Makes chatting so much easier',
		user: {
			id: 'u2',
			name: 'David',
		},
	}, {
		id: 'm3',
		content: 'Yeah me too',
		user: {
			id: 'u2',
			name: 'David',
		},
	}, {
		id: 'm4',
		content: 'Good as well, loving this new social bubble app',
		user: {
			id: 'u1',
			name: 'John',
		},
	}, {
		id: 'm5',
		content: 'Yes I am good, how about yourself John?',
		user: {
			id: 'u2',
			name: 'David',
		},
	}, {
		id: 'm6',
		content: 'how are you doing?',
		user: {
			id: 'u1',
			name: 'John',
		},
	}, {
		id: 'm7',
		content: 'Hey David',
		
		user: {
			id: 'u1',
			name: 'John',
		},
	
	}]
}
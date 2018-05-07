const promise = new Promise((resolve, reject) => {
	setTimeout( () => {
		// resolve('This is my resolved data');
		resolve({
			name:'Pooja',
			age:25
		});
		// reject('Something went wrong');
	}, 5500);
});

console.log('before');

promise.then( (data)  => {
	console.log('1', data);
});

promise.then( (data)  => {
	console.log('2', data);
}).then(() => {
	console.log('does this work?')
}).catch((error) => {
	console.log('error: ',error )
});

console.log('after');
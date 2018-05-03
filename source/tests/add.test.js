const add =  (a,b) => a + b ;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;


test('should add two numbers',()=> {
	const result = add(3, 4);
	expect (result).toBe(7);
});

test('should test the entered name', () => {
	const result = generateGreeting('Pooja');
	expect(result).toBe('Hello Pooja!');
});

test('should generate no name for anonymous',() => {
	const result = generateGreeting();
	expect(result).toBe('Hello Anonymous!')
});
// function scope

// let subject = 'create video';
let subject;

// function createThink() {
// 	subject = 'study';
// 	return subject;
// }

function createThink(subject) {
	subject = 'study';
	return subject;
}

console.log(subject);
console.log(createThink(subject));
console.log(subject);
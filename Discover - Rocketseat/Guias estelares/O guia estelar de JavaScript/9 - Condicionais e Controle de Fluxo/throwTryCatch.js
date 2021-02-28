// throw

function sayMyName(name = "") {
	if (name === "") {
		throw new Error("Nome é necessário!")
	}

	console.log("Depois do erro")
}

// try...catch
try {
	sayMyName()
} catch(e) {
	console.log(e)
}
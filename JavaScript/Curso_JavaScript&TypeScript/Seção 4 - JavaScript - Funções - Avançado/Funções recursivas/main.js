function recursiva(max) {
	if(max >= 100) return;
	max++;
	console.log(max);
	recursiva(max);
}

recursiva(0);
'use strict'

const fs  = require('fs');

// Configuration
let largeFile  = __dirname + '\\large.txt';
let smallFile  = __dirname + '\\small.txt';
let smallArray = arrayRemoveDuplicate(fs.readFileSync(smallFile).toString().split("\n"));
let largeArray = arrayRemoveDuplicate(fs.readFileSync(largeFile).toString().split("\n"));
let finalArray = arrayRemoveEmpty(arrayDiffRemove(largeArray,smallArray));

// Helpers
function arrayDiffRemove(originalArr, removeArr) {
	return originalArr.filter( (el) => {
		return !removeArr.includes( el );
	} );
}
function arrayRemoveEmpty(arr) {
	arr = arr.filter(String);
	arr = arr.filter(word => word.length > 1);
	return arr;
}
function arrayRemoveDuplicate(arr) {
	return [...new Set(arr)];
}
function arrayToFile(filename, data) {
	for (let i = data.length; i --> 0 ;) {
		if (i != (data.length - 1)) data[i] = '\n' + data[i];
		fs.appendFileSync(filename, data[i], (err) => {
			if (err) process.stderr.write(err.stack);
		});
	}
}

// Main
process.stdout.write('Small file elements: ' 	    + smallArray.length + '\n');
process.stdout.write('Large file elements: ' 	    + largeArray.length + '\n');
process.stdout.write('Final file elements: ' + finalArray.length + '\n');
arrayToFile('difference.txt', finalArray);

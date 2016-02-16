var arr1 = [1,2,2,8,2,1]; 
// 1 задача
function equals(arr) {
	var result = false;
	for(var i = 0; i < arr.length; i++) {
		if(arr.indexOf(arr[i]) != i) {
			result = true;
		}
	}
	if(result) 
		console.log("В массиве есть повторяющиеся элементы");
	else
		console.log("В массиве нет повторяющихся элементов");
	return result;
}
equals(arr1); 
// 2 задача
function repeats(arr) {
	var resultArray = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr.indexOf(arr[i]) != i) { 
			if(resultArray.indexOf(arr[i]) < 0)
				resultArray.push(arr[i]); 
		}
	}
	console.log(resultArray);
	return resultArray;
}
repeats(arr1);


// 3 задача
var arr2 = [3,2,-5,1,0,-2]; 
function countNegative(arr) {
	var count = 0;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] < 0) { 
			count++; 
		}
	}
	console.log(count); 
	return count;
}
countNegative(arr2); 

// 4 задача
function foundMin(arr) {
	var min = 0; 
	for(var i = 1; i < arr.length; i++) { 
		if(arr[i] < arr[min]) { 
			min = i; 
		}
	}
	console.log("Минимальное число в массиве " + arr[min] + " находится под индексом " + min);
	return arr[min]; 
}
foundMin(arr2); 

//5
var arr3 = [1,14,5,7,9,2];
function seven(arr) {
	var count = 0;
	 for (var i = 0; i<arr.length; i++){
		 if(arr[i]%7 == 0) {
			 count   
		 }
	 }
	return count;
}
console.log(seven(arr3));

//6
var arr4 = [1,5,4,62,14,10,8];
function cross(arr) {
	var count = 0;
 var arr5 = [5,4,8,10,15,2];
	for (var i=0; i<arr.length; i++){
		if (arr5.indexOf(arr[i])){
			count++;
		}
	}
	return count;
}
console.log(cross(arr4));

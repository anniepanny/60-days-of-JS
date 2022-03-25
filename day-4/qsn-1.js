const unSortedArray = [5,2,4,3,1];

let firstElement = unSortedArray.pop();//1
let secondElement = unSortedArray.pop();//3
let thirdElement = unSortedArray.pop();//4
let fourthElement = unSortedArray.pop();//2
let fifthElement = unSortedArray.pop();//5

unSortedArray.push(firstElement);//[1]
unSortedArray.push(fourthElement);//[1,2]
unSortedArray.push(secondElement);//[1,2,3]
unSortedArray.push(thirdElement);//[1,2,3,4]
unSortedArray.push(fifthElement);//[1,2,3,4,5]
console.log(unSortedArray);




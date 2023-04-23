/*Do the below programs in anonymous function & IIFE:

Print odd numbers in an array
Convert all the strings to title caps in a string array
Sum of all numbers in an array
Return all the prime numbers in an array
Return all the palindromes in an array
Return median of two sorted arrays of the same size.
Remove duplicates from an array
Rotate an array by k times*/

//Print odd numbers in an array

let array = [1,2,3,4,5];

for(item of array){
   if(item % 2 == 1){
      console.log(item);
   }
}



//Convert all the strings to title caps in a string array

let lowercase = "linkes";
let uppercase = "";
for(let i = 0; i < lowercase.length; i++){
   uppercase += lowercase[i].toUpperCase();
}

console.log(uppercase);

//Sum of all numbers in an array

array2 = [1,2,10,4,9];
let sum = 0;

for(item of array2){
   if(!Number.isInteger(item)){
      sum = "Not all values in your array are numbers";
      break;
   }
   else{
      sum += item;
   }
}

console.log(sum);


// Return all the prime numbers in an array

array3 = [1,5,7,8,9,11,13,12,14];
primenumbers =[];
for(item of array3){
   prime = true;
   for(let i = 2; i <item; i++){
      if(item % i == 0){
         prime = false;
         break;
      }
   }
   if(prime){
      primenumbers.push(item);
   }
}
console.log(primenumbers.join(' '));



// Return all the palindromes in an array

let array4 = ["water","civic","radar","deed"];
let palindrome = [];

for(word of array4){
   if(word == word.split('').reverse().join('')){
      palindrome.push(word);
   }
}

console.log(palindrome);

// Return median of two sorted arrays of the same size.
   // since array same siza --> total length is always even
let array6 = [1,3,4,10];
let array7 = [2,8,9,11];


arrayjoined = array6.concat(array7);
arrayjoined.sort((a,b) => {return a-b;})


   // since 2 arrays are of same siza --> total length is always even

num1 = arrayjoined[arrayjoined.length/2 - 1];
num2 = arrayjoined[arrayjoined.length/2];

let median = (num1 + num2)/2;

console.log(median);

// Remove duplicates from an array

let array8 = [1,1,1,1,1,2,2,2,3,3,3,5];
let unique = {};


for (item of array8){
   unique[item] = 0;
}

let uniquenum = Object.keys(unique);
console.log( uniquenum);

//Rotate an array by k times


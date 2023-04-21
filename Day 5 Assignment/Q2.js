/*Do the below programs in arrow functions.


Print odd numbers in an array
Convert all the strings to title caps in a string array
Sum of all numbers in an array
Return all the prime numbers in an array
Return all the palindromes in an array
 */


//Print odd numbers in an array

let array = [1,2,3,4,9];

odd = (x) => {
        for(item of x){
            if(item % 2 == 1){
            console.log(item);
         }
        }
    }
odd(array);


//Convert all the strings to title caps in a string array


let namelower = "Linkes";
uppercase = (x) =>{
    let nameupper ="";
    for(let i = 0; i < x.length; i++){
        nameupper += x[i].toUpperCase();
     }
     
     console.log(nameupper);
     
}

uppercase(namelower);


//Sum of all numbers in an array

let array2 = [1,2,3,4,5];

let summation = (x) => {
    let sum = 0;
    for(item of x){
        if(!Number.isInteger(item)){
            sum = "Not all values in your array are numbers";
            break;
        }
        else{
            sum += item;
        }
    }
    console.log(sum);
}

summation(array2);


//Return all the prime numbers in an array

let array3 = [1,5,7,8,9,11,13,12,14];

let whichisprime = (x) => {
    let primenumbers =[];
        for(item of x){
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
}

whichisprime(array3)


//Return all the palindromes in an array
let array4 = ["water","civic","radar","deed"];


isitPalindrome = (x)=>{
    let palindrome = [];

    for(word of x){
        if(word == word.split('').reverse().join('')){
        palindrome.push(word);
    }
}

console.log(palindrome);

};

isitPalindrome(array4);
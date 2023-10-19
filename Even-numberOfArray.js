
// ..........................Even Number Of Array.............................


function myEvenNumber(number) {

    let even =[] ;

    for(i = 0 ; i < number.length ; i++) {

        const element = number[i] ;

        if(element % 2 == 0) {

            even.push(element) ;

        }
    }

    return even ;


}

const myNumber=[34,40,57,23,78,81,95];

const result7 = myEvenNumber(myNumber) ;

console.log(result7);



// ..........................Odd Number Of Array.............................



function myOddNumber(number) {

    let  odd=[] ;

    for(const element of number) {

        
        if(element % 2 != 0) {

            odd.push(element) ;

        }
    }

    return odd ;


}

const myNumber2=[34,40,57,23,78,81,95];

const result8 = myOddNumber(myNumber2) ;

console.log(result8);


// ...................Even Number..................

function isEven(number) {

    if(number % 2 == 0 && number > 0) {

        return true ;
    }

    else {

        return false ;
    }


}

const myNumber= 40;
const even=isEven(myNumber);
console.log(even);

const number= 41;
const even2=isEven(number);
console.log(even2);


// ......................Odd Number...............


function isOdd(number2) {

    if(number2 % 2 != 0 && number > 0) {

        return true ;
    }

    else {

        return false ;
    }


}

const myNumber2= 40;
const even3=isEven(myNumber2);
console.log(even3);

const number2= 41;
const even4=isEven(number2);
console.log(even4);
function getMiterToKilometer(miter) {

    const kilometer = miter / 1000 ;
    
    if(miter > 0) {

        return kilometer ;


    }

    else {

        return 'please enter a valid number' ;
    }


    
    
}

const myNumber = 5000;
const result = getMiterToKilometer(myNumber);
console.log(result);

const myNumber2 = 'dffg';
const result2 = getMiterToKilometer(myNumber2);
console.log(result2);
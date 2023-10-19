function getInchToFeet(inches) {

    const feet = inches / 12 ;

    if(inches > 0) {

        return feet ;

    }

    else {

        return 'please enter a valid number' ;
    }


}


const inch=120 ;

const result = getInchToFeet(inch)

console.log(result);



const myInch='sdf' ;

const result2 = getInchToFeet(myInch)

console.log(result2);

// .......................SUM..........


function getSummation(num1 ,num2) {

    const sum = num1 + num2 ;

    if(num1 > 0  && num2 > 0) {

        return sum ;

    }

    else {

        return 'please enter a valid number' ;
    }

    

}

const totalValue = getSummation(50 ,[20 , 30]) ;

console.log(totalValue);



// ...............SUBTRACTION.................




function getReduce(num1 , num2) {

    const reduce =num1 - num2 ;

    if(num1 > 0 && num1 > num2) {

        return reduce ;

    }



    else {

        return 'please enter a valid number  or please ignore negative value' ;
    }
    


}

const totalValue2= getReduce(30 ,40) ;

console.log(totalValue2);




// ....................multiplication............................


function getMultiplication(num1 ,num2) {

    const multi = num1 * num2 ;

    if(num1 > 0  && num2 > 0) {

        return multi;

    }

    else {

        return 'please enter a valid number' ;
    }

    

}

const total = getMultiplication(50 ,0) ;

console.log(total);






// ..........................//////...............




function getShare(num1 ,num2) {

    const share = num1 / num2 ;

    if(num1 > 0  && num1 > num2 && num2 !==0) {

        return share;

    }

    else {

        return 'please enter a valid number' ;
    }

    

}

const total2 = getShare(50 ,0) ;

console.log(total2);


// ........fibonacci series .............

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...


// 3rd = 2nd+1st
// 4th = 3rd + 2nd;
// 5th =4th + 3rd
// nth= (nth-1) + (nth-2) 

// i = (i-1) + (i-2);


function findFibonacci(number) {


    if(typeof number != 'number') {

        return "please give a number";

    }

    else if (number < 0) {

        return "warning";

    }

    const fbo =[0 , 1];

    for(let i=2; i<=number;i++) {

        fbo[i]=fbo[i-1] + fbo[i-2];

    }

    return fbo;
}

const myFbo =findFibonacci(-10);

console.log(myFbo);



// ..........................////////////////,,,,,,,,,,,,,,,,,,,,




function getFibonacci(number2) {


    if(typeof number != 'number') {

        return "please give a number";

    }

    else if (number < 0) {

        return "warning";

    }

    const fbo2 = [0 ,1] ;

    i = 2 ;

    while( i <= number2 ) {

        fbo2[i] = fbo2[i-1] + fbo2[i-2] ;

        i++ ;

    }

    return fbo2;




}

const myFbo2 = getFibonacci(10);

console.log(myFbo2);
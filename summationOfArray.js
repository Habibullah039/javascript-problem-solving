
// ...................Summation  Of Array...................


const myNumber = [23 ,30 ,35 ,40 , 50] ;


function getResult(numbers) {

    let sum = 0 ;

    for(i = 0 ; i < numbers.length ; i++) {

        const element = numbers[i] ;
        
        if(typeof numbers !== 'string') {

            sum = sum + element ;

        }

        else {

            return "please enter number"
        }
            
        

    }

    
    return sum ;
       

}

const result = getResult(myNumber) ;

console.log(result);






// .....................Summation Of Array.................



function getResult2(numbers2) {

    let sum = 0 ;
    let i = 0;
    while(i < numbers2.length) {

        const element = numbers2[i] ;
        sum = sum + element ;
        i++;
    }

    return sum ;

}

const result2 = getResult2(myNumber) ;
console.log(result2) ;

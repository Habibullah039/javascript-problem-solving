
// ................Largest value of Array.......................


function largestValue(value) {

    let largest = value[0] ;

    for(i = 0 ; i < value.length ; i++) {

        const element = value[i] ;

        if(element > largest) {

            largest = element ;

        }

    }

    return largest ;



}

const myNumber=[34,40,57,23,78,81,95];

const large = largestValue(myNumber) ;

console.log(large);



// ......................Smallest value of Array.......................


function mySmallestNumber(number) {

    let smallest=number[0];

    for(let i = 0 ; i < number.length ; i++ ) {

        const mySmallest = number[i];

        if(mySmallest < smallest) {

            smallest = mySmallest;
        }
    }

    return smallest;

}

const myNumber2=[34,40,57,23,78,81,95];

const total2 = mySmallestNumber(myNumber2);

console.log(total2);
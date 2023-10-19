
// .....................if else Number.............


let first = 100 ;
let second = 200;
let third = 300;

if(first > second && first > third) {

   console.log(first) ;


}

else if(second > first && second > third) {
   
    console.log(second)  ;

}

else{

    console.log(third) ;
}


// ...................Math.largest Number.............


const number1=200;
const number2=300;
const number3 =400;

const largest=Math.max(number1,number2,number3);

console.log(largest);



// ............................Find Largest value ............first..





function largestValue(math , english , bang) {

    if(math > 0 && english > 0   &&  bang > 0) {


        if(math > english && math > bang) {

            return math ;
        }
    
        else if(english > math && english > bang) {
    
            return english ;
    
    
        }
    
        else {
    
            return bang ;
        }


    }

    else {

        return 'please enter a valid number' ;
    }


}

const myResult = largestValue(900 , 0 , 100) ;

console.log(myResult);





// ...................smallestValue............




function smallestValue(math , english , bang) {

   
    if(math > 0 && english > 0   &&  bang > 0) {


        if(math < english && math < bang) {

            return math ;
        }
    
        else if(english < math && english < bang) {
    
            return english ;
    
    
        }
    
        else {
    
            return bang ;
    
        }
    


        
    }

    else {

        return 'please enter a valid number' ;
    }


}

const myResult2 = smallestValue(900 , 200 , 0) ;

console.log(myResult2);


const myString = "hello how are you" ;

// console.log(myString.length) ;
// console.log(myString[3]);

function stringRivers() {

    let rivers = ' ';
    for(const letter of myString) {

        rivers = letter + rivers ;
    }

    return rivers ;

}

const getRivers =stringRivers(myString);
console.log(getRivers);
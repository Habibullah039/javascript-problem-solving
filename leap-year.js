
// .........LeapYear.....


function isLeapYear(number) {

    if(number % 4 ==0  &&  number > 0) {

        return true;
    }

    else {

        return false;
    }
}
const myYear=isLeapYear(2087);

console.log(myYear);

const myYear2=isLeapYear(2024);

console.log(myYear2);
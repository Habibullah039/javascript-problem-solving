
// ....................fahrenheitToCelsius.......................



function fahrenheitToCelsius(fahrenheit) {

    const celsius = (fahrenheit-32) * 5 / 9 ;

    if(fahrenheit >= 0  ||  fahrenheit < 0) {

        return celsius ;
    }

    else {

        return  "Please Enter a value" ;
    }


}

const total = fahrenheitToCelsius(212) ;

console.log(total);




// ...............fahrenheitToKelVin............




function fahrenheitToKelVin(fahrenheit) {

    const kelvin = (fahrenheit-32) * 5 / 9 + 273.15 ;

    if(fahrenheit >= 0  ||  fahrenheit < 0) {

        return kelvin ;
    }

    else {

        return  "Please Enter a value" ;
    }


}

const total2 = fahrenheitToKelVin(212) ;

console.log(total2);

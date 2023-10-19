

/*

1chair = 5 chairWood ;
chair = chairWood * chairQuantity;

*/

function woodQuantity(chairQuantity , tableQuantity ,
    bedQuantity) {

    const perChairWood = 5;
    const perTableWood = 8 ;
    const perBedWood = 15 ;

    const totalChair = perChairWood * chairQuantity ;
    const totalTable = perTableWood * tableQuantity ;
    const totalBed = perBedWood * bedQuantity ;


    const totalWood = totalChair + totalBed + totalTable ;

    return totalWood ;


}


const total = woodQuantity(10 ,10,10) ;

console.log(total);
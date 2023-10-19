

const phones = [

    {id:1 , phone: 'vivo' , price: '7000' ,ram: '1gb'} ,

    {id:2 , phone: 'opo' , price: '5000' ,ram: '4gb'} ,

    {id:3 , phone: 'mi' , price: '3000' ,ram: '2gb'} ,

    {id:4 , phone: 'samsung' , price: '9000' ,ram: '3gb'} 

] ;



function findCheapestPhone(myPhone) {

    let  cheapest= myPhone[0] ;

    for(const phone of myPhone) {


        if(phone.price < cheapest.price) {

            cheapest = phone ;
        }

    }

    return cheapest ;

}

const latestPhone = findCheapestPhone(phones) ;

console.log(latestPhone) ;






// ....................Largest..............







function findLargestPhone(myPhone) {

    let  cheapest= myPhone[0] ;

    for(const phone of myPhone) {


        if(phone.price > cheapest.price) {

            cheapest = phone ;
        }

    }

    return cheapest ;

}

const latestPhone2= findLargestPhone(phones) ;

console.log(latestPhone2) ;
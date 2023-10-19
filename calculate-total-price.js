const products = [

    {id:1 , phone: 'vivo' , price: '7000' ,ram: '1gb' , quantity : 3 } ,

    {id:2 , phone: 'opo' , price: '5000' ,ram: '4gb' , quantity : 2 } ,

    {id:3 , phone: 'mi' , price: '3000' ,ram: '2gb' , quantity : 4 } ,

    {id:4 , phone: 'samsung' , price: '9000' ,ram: '3gb' , quantity : 2 } 

] ;



function findTotalPrice(myProducts) {

    let  totalPrice = 0 ;

    for(const product of myProducts) {

        totalPrice = totalPrice + product.price * product.quantity ;
      

    }



    return totalPrice ;


}

const total = findTotalPrice(products) ;

console.log(total) ;





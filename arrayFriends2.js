const bestFriends = ['alamin' ,'rakib' , 'ferdous' ,'jannatul','raya'] ;

function findMyFriends(friends) {

    let myFriend =[] ;

    for(const friend of friends) {       

        if(friend.length % 2 === 0 ) {

            myFriend.push(friend);

        }

    }

    return myFriend;


    

}

const result = findMyFriends(bestFriends);

console.log(result);
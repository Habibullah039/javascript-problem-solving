const bestFriends = ['alamin' ,'rakib' , 'ferdous' ,'jannatul','raya'] ;

function findMyFriends(friends) {

    let myFriend =friends[0] ;

    for(const friend of friends) {       

        if(friend.length > myFriend.length ) {

            myFriend = friend;

        }

    }

    return myFriend;


    

}

const result = findMyFriends(bestFriends);

console.log(result);
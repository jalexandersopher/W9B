var userAges = [16, 19, 43, 24];
var subscriptionStatus = [true, false, true, false];


for(var index = 0; index < 4; index++) {
    var userAge = userAges[index];
    var isSubscribed = subscriptionStatus[index];
    
    if (userAge >= 18 && isSubscribed) {
        console.log("User is 18 or older and subscribed");
    } else if (userAge < 18 && isSubscribed) {
        console.log("User is under 18 and subscribed");
    } else if (userAge >= 18 && !isSubscribed) {
        console.log("User is 18 or older and is not subscribed");
    } else if (userAge < 18 && !isSubscribed) {
        console.log("User is under 18 and not subscribed");
    } else {
        console.log("Something went wrong");
    }
}


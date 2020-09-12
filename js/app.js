var userAge = 17;
var isSubscribed = true;

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

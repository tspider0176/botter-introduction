function createTweetElement(text) {
    var item = document.createElement("li");
    var content = document.createTextNode(text);
    item.appendChild(content);
    return item;
}

var messages = ["Hello.", "How are you?"];

var tweetsList = document.getElementById("tweets");
messages.map(function (tweet) {
    return createTweetElement(tweet);
}).forEach(function (item) {
    tweetsList.appendChild(item);
});
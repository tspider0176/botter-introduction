function createChatElement(chat) {
  var itemNode = document.createElement("li");
  var textNode = document.createTextNode(chat);
  itemNode.appendChild(textNode);
  return itemNode;
}

var chatMessages=["あなたは安藤咲さんですか。","はい。咲と呼んでください。","咲さんは柔道部員ですか。","はい、そうです。"];

var chatList = document.getElementById("chats");
chatMessages.reverse().map(function (chat){
  return createChatElement(chat);
}).forEach(function (item){
  chatList.appendChild(item);
});
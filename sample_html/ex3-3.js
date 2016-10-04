var anchors = document.getElementsByClassName("openNewTab");
[].forEach.call(anchors, function (anchor){
  anchor.setAttribute('target', '_blank');
});
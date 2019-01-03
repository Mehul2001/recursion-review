// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  if(!window.document.body){
  	return null;
  };
  var result = [];
  function wrap(currentNode){
      if (currentNode.classList.contains(className)){    result.push(currentNode);
    };
    if(currentNode.children.length === 0){
    	return result;
    } else {
    	for(var i = 0; i < currentNode.children.length;i++){
    	  var curVal = currentNode.children[i];
        wrap(curVal);
    	};
    };
  }
  wrap(window.document.body)
 return result;
};
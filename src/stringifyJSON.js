// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
//if number || string || null || boolean 
//if array loop through all the elements of array and convert into string
// if object loop through all the elements of object values and convert into string
  var resultArr = ""; 
  if(typeof(obj) === 'number' || obj === null || obj === true || obj === false){
    return String(obj);
  }
  if(typeof(obj) === 'string'){
    return '"' + obj  + '"';
  }
  if(Array.isArray(obj)) {   
    if(obj.length === 0){
      return '[]';
    } else{
      var ans = '[';
      for(var i = 0; i < obj.length; i++){
        ans+= stringifyJSON(obj[i]) + ',';
      }
      return ans.slice(0, ans.length-1) + ']';
    }
  }
  if(typeof obj === 'object'){
    var keys = Object.keys(obj);
    if(keys.length === 0){
      return '{}';
    } else{
      var objAns = "";
      for(var j = 0; j < keys.length; j++){
        if(typeof obj[keys[j]] === 'function'){
          return "{}";
        }
        if(j === keys.length-1){
          objAns += stringifyJSON(keys[j]) + ":" + stringifyJSON(obj[keys[j]]);
        } else {
          objAns += stringifyJSON(keys[j]) + ":" + stringifyJSON(obj[keys[j]]) + ",";
        }    
      }
      return "{" + objAns + "}";
    }
  }
};var stringifyJSON = function(obj) {
//if number || string || null || boolean 
//if array loop through all the elements of array and convert into string
// if object loop through all the elements of object values and convert into string
  var resultArr = ""; 
  if(typeof(obj) === 'number' || obj === null || obj === true || obj === false){
    return String(obj);
  }
  if(typeof(obj) === 'string'){
    return '"' + obj  + '"';
  }
  if(Array.isArray(obj)) {   
    if(obj.length === 0){
      return '[]';
    } else{
      var ans = '[';
      for(var i = 0; i < obj.length; i++){
        ans+= stringifyJSON(obj[i]) + ',';
      }
      return ans.slice(0, ans.length-1) + ']';
    }
  }
  if(typeof obj === 'object'){
    var keys = Object.keys(obj);
    if(keys.length === 0){
      return '{}';
    } else{
      var objAns = "";
      for(var j = 0; j < keys.length; j++){
        if(typeof obj[keys[j]] === 'function'){
          return "{}";
        }
        if(j === keys.length-1){
          objAns += stringifyJSON(keys[j]) + ":" + stringifyJSON(obj[keys[j]]);
        } else {
          objAns += stringifyJSON(keys[j]) + ":" + stringifyJSON(obj[keys[j]]) + ",";
        }    
      }
      return "{" + objAns + "}";
    }
  }
};var stringifyJSON = function(obj) {
//if number || string || null || boolean 
//if array loop through all the elements of array and convert into string
// if object loop through all the elements of object values and convert into string
  var resultArr = ""; 
  if(typeof(obj) === 'number' || obj === null || obj === true || obj === false){
    return String(obj);
  }
  if(typeof(obj) === 'string'){
    return '"' + obj  + '"';
  }
  if(Array.isArray(obj)) {   
    if(obj.length === 0){
      return '[]';
    } else{
      var ans = '[';
      for(var i = 0; i < obj.length; i++){
        ans+= stringifyJSON(obj[i]) + ',';
      }
      return ans.slice(0, ans.length-1) + ']';
    }
  }
  if(typeof obj === 'object'){
    var keys = Object.keys(obj);
    if(keys.length === 0){
      return '{}';
    } else{
      var objAns = "";
      for(var j = 0; j < keys.length; j++){
        if(typeof obj[keys[j]] === 'function'){
          return "{}";
        }
        if(j === keys.length-1){
          objAns += stringifyJSON(keys[j]) + ":" + stringifyJSON(obj[keys[j]]);
        } else {
          objAns += stringifyJSON(keys[j]) + ":" + stringifyJSON(obj[keys[j]]) + ",";
        }    
      }
      return "{" + objAns + "}";
    }
  }
};

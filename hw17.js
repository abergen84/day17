$.getJSON("https://api.github.com/users/abergen84").then(function(data){
    console.log(data);
})

// var myRequest = new XMLHttpRequest();
// myRequest.onload = function(){
//     var json = JSON.parse(this.responseText);
//     console.log(json);
// };
// myRequest.open("get", "https://api.github.com/users/abergen84", true);
// myRequest.send();
// 
var someHtmlString = [
        "<img src='{avatar_url}'>",
        "<h1>{name}</h1>",
        "<ul>",
            "<li> blog: {blog} </li>",
            "<li> location: {location} </li>",
            "<li> email: {email} </li>",
        "</ul>",
    ].join("");
  

function writeToDOM(data){
    document.getElementById("left-column").innerHTML = _.template(someHtmlString, data);
}

$.getJSON("https://api.github.com/users/abergen84").then(writeToDOM)

//```js
_.templateSettings.interpolate = /{([\s\S]+?)}/g;
//```
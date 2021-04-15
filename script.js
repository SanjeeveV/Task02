//create a request instance
var req = new XMLHttpRequest();
//create a new  connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request
req.send();
//load the function- this function will be triggered only when the data has been received successfully
req.onload=function(){
    var data=JSON.parse(this.response);
    for(var i in data){
    console.log(data[i].name);
}
}
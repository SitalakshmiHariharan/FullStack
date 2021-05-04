window.onload = function(){
  //The Vanilla JavaScript Way
  //to create a XHR to make request and get data back from a server
  var http = new XMLHttpRequest();
  // to monitor the state change
  http.onreadystatechange =  function(){
    // to fire some event when the request is complete (status==200 denotes everything is ok)
    if(http.readyState == 4 && http.status ==200)
    {
      //to retreive the response of the request
      //console.log(JSON.parse(http.response));
    }
  };
  //Open() - what type of request,where to get data from and if it is sync(false) or Async(true)
  //It is best practice to use async method
  http.open("GET","tweets.json",true);
  //send() - to go and grab data
  http.send();

//The JQUERY Way - This is async
$.get("tweets.json",function(data){
  //get is the only method required in JQuery. It takes 2 arguments. Where to get the data from and what to do after getting the data
  console.log(data);
});

};

/* READY STATES
0 - request is not initialized
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete
*/

/* To test async behavior
Use a console.log("test") after the send or get methods.
If the test gets printed before the results of the 2 methods are obtained, it proves that it is async.
*/

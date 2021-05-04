function myFunction() {
  // Type your code here.
  //var result=[];
  var name = document.getElementById("myname").value;
  //result.push(name);

  var phone = document.getElementById("myphone").value;
  //result.push(phone)

  var country = document.getElementById("mycountry").value;
  //result.push(country);

  var email = document.getElementById("mymail").value;
  //result.push(email);

  var result = name +
    "," +
    phone +
    "," +
    country +
    "," +
    email;
    alert(result);
  //document.write(result);
  return result; //Enter your return statement here
}
/*function myFunction(){
const elementsList = document.querySelectorAll("#myname, #myphone, #mycountry, #myemail");
const elementsArray = [...elementsList];

// Now you can use cool array prototypes
elementsArray.forEach(element => { document.write(element); } );
return element;
}*/

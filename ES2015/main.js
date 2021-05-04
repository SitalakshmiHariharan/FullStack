/*var student = {
    number:1,
    message:function(){        
        setTimeout(function(){console.log(this.number)},1000)}
};

student.message();*/

/*var person = {
    firstName: "Adithu",
    lastName : "Achu",
    id       : 5566,
    fullName : function() {        
      setTimeout(()=>{console.log(this.firstName + " " + this.lastName);},3000);        
    }
  };
  person.fullName();*/


/*let employee = {
    id:1, 
    greet: function() {
      setTimeout (() => console.log(this.id), 1000) 
    }
}
employee.greet() ;*/

/*var defaultVal = function(x=10,y=x*10){
    console.log(x+y);
}
defaultVal(1,2); // Output:3
defaultVal(); //Output:110
defaultVal(1); //Output:11
defaultVal(undefined,2); //Output:12*/

var listNames= function(message,...names){
    console.log(message);
    for(let i in names)
    {
        console.log(names[i]);
    }
}
let message = "My dearies are:"
let nameArray = ['Prathee', 'Adithu','Achu'];
listNames(message,...nameArray);

///listNames(message,'Prathee');
///listNames(message,'Prathee', 'Adithu');
///listNames(message,'Prathee', 'Adithu', 'Achu');
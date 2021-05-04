function stringGen()
{
    var numberOfCharacters = document.getElementById("num").value;
	console.log("the id value is:" + numberOfCharacters);
    var result = '';
    var stringValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  
    var sizeOfCharacter = stringValues.length;  
 for (var i = 0; i < numberOfCharacters; i++) {
       result = result + stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
    }	
	document.getElementById('result').innerHTML = result;
    return result;
}

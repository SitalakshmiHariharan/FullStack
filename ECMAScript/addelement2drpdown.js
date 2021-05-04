function runList(){
    //Type your code here.
    var countryList = document.getElementById("list");
    var newCountry = document.getElementById("txtbox").value;
    var option = document.createElement('option');
    option.text = newCountry;
    countryList.options.add(option);
}

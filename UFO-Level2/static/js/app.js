// from data.js
var tableData = data;

//Populate the data into HTML page

var tbody = d3.select("#tbody")

function populate(insertdata){
    tbody.html("");
    insertdata.forEach(function (adddata){
    
    var row = tbody.append("tr");
    Object.entries(adddata).forEach(function([key,value]){
    cell = row.append("td");
    cell.text(value)
});});};

populate(tableData)
// Listen for search bar in order to show desired data

// Filter for date

var form = d3.select("#datetime");
form.on("input",finddata);



function finddata() {
    d3.event.preventDefault();
    
    var input = d3.select("#datetime").property("value");
  
    var filteredData = tableData.filter(dates => dates.datetime === input);
    
    populate(filteredData)
    
};
// Filter for cities
var form2 = d3.select("#city");
form2.on("input",finddata2);

function finddata2() {
    d3.event.preventDefault();
    
    var input = d3.select("#city").property("value");
  
    var filteredData = tableData.filter(city => city.city === input);
    
    populate(filteredData)
    
};
// Filter for State
var form3 = d3.select("#state");
form3.on("input",finddata3);

function finddata3() {
    d3.event.preventDefault();
    
    var input = d3.select("#state").property("value");
  
    var filteredData = tableData.filter(state => state.state === input);
    
    populate(filteredData)
};
// Filter for Country
var form4 = d3.select("#country");
form4.on("input",finddata4);

function finddata4() {
    d3.event.preventDefault();
    
    var input = d3.select("#country").property("value");
  
    var filteredData = tableData.filter(country => country.country === input);
    
    populate(filteredData)
};
// Filter for Shape
var form5 = d3.select("#shape");
form5.on("input",finddata5);

function finddata5() {
    d3.event.preventDefault();
    
    var input = d3.select("#shape").property("value");
  
    var filteredData = tableData.filter(shape => shape.shape === input);
    
    populate(filteredData)
};
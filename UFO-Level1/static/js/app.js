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


var form = d3.select("#form");
form.on("submit",finddata);



function finddata() {
    d3.event.preventDefault();
    
    var input = d3.select("#datetime").property("value");
  
    var filteredData = tableData.filter(dates => dates.datetime === input);
    
    populate(filteredData)
    
};



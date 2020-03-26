// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

function filterData(){
     
    var dateElement = d3.select("#datetime");
    var dateValue = dateElement.property("value");
    var cityElement = d3.select("#city");
    var cityValue = cityElement.property("value");
    var stateElement = d3.select("#state");
    var stateValue = stateElement.property("value")
    var countryElement = d3.select("#country");
    var countryValue = countryElement.property("value");
    var shapeElement = d3.select("#shape");
    var shapeValue = shapeElement.property("value");
 
    
    var filtered = data.filter(data => (data.datetime === dateValue || dateValue.length === 0)
        && (data.city === cityValue || cityValue.length === 0) 
        && (data.state === stateValue || stateValue.length === 0) 
        && (data.country === countryValue || countryValue.length === 0) 
        && (data.shape === shapeValue || shapeValue.length === 0) );


    if (dateValue === "datetime"){
        filtered = data.filter(data => data.datetime === dateValue );
    }
    else if (cityValue ==="city"){
        filtered = data.filter(data => data.city === cityValue);
    }
    else if (stateValue === "state"){
        filtered = data.filter(data => data.state === stateValue);
    }
    else if (countryValue === "country"){
        filtered = data.filter(data => data.country === countryValue);
    }
    else if (shapeValue === "shape"){
        filtered = data.filter(data => data.shape === shapeValue);
    }
  
    console.log(filtered)
    buildTable(filtered);

};
function buildTable(filtered){
    var table = d3.select('#ufo-table');



var rows = table.select("tbody").selectAll("tr").data(filtered);
rows.enter()
  .append("tr")
  .merge(rows)
  .html(data => `<td>${data.datetime}</td><td>${data.city}</td><td>${data.state}</td><td>${data.country}</td><td>${data.shape}</td><td>${data.durationMinutes}</td><td>${data.comments}</td>`);
rows.exit().remove();

}

buildTable(data);
button.on("click", filterData);



 


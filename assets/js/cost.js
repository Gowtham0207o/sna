function run_func() {
  
    var total_sf = document.getElementById("total_sf").value;
    var compound = document.getElementById("compound").value;
    var others = document.getElementById("others").value;
    var subject = document.getElementById("subject").value;
    var inputGroupSelect01 = document.getElementById("inputGroupSelect01").value;

  if(inputGroupSelect01 == 1){
    var totalCost = parseFloat(total_sf)*1800 + parseFloat(compound)*1300 + parseFloat(others)*16 + parseFloat(subject);
  }else if(inputGroupSelect01 == 2){
    var totalCost = parseFloat(total_sf)*2400 + parseFloat(compound)*1600 + parseFloat(others)*22 + parseFloat(subject);
  }else{
    var totalCost = parseFloat(total_sf)*2200 + parseFloat(compound)*1400 + parseFloat(others)*20 + parseFloat(subject);
 
  }
    
    console.log("Total Cost:", totalCost);
 var resultDiv = document.createElement("div");

   
    resultDiv.innerHTML = "<h3>Total Cost: Rs." + totalCost + "</h3>" +
                          "<p>Area: " + total_sf/435.6 + "Cents</p>";


    var resultContainer = document.getElementById("resultContainer");
    resultContainer.appendChild(resultDiv);
    makechart(totalCost);
}
function makechart(total){
var xValues = ["Steel", "Cement", "Fittings", "Sand", "Aggregate","Finishing"];
var yValues = [total*0.24, total*0.16, total*0.24, total*0.12, total*0.7,total*0.17];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145",
  "#FFFF00"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Total Cost Splitup"
    }
  }
});
}

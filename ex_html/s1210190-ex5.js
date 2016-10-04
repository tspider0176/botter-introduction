var timeTableJSONString = [
  {"firstName":"John", "lastName":"Doe"},
  {"3rd_period":"csI_ex", "2nd_period":"csI", "1st_period":"LS2", "4th_period":"literacy"}
];

var timeTableJSONObject = JSON.parse(timeTableJSONString);

function init() {
  var fullName = document.getElementById("full_name");
  var timeTableList = document.getElementById("time_table");
  fullName.appendChild(createFullNameTextNode());
  timeTableList.appendChild(1);
}

init();

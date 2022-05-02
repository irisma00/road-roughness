const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
	dd = '0' + dd;
 }
 
 if (mm < 10) {
	mm = '0' + mm;
 } 
	 
todayDate = yyyy + '-' + mm + '-' + dd;

todayMonth = yyyy + '-' + mm;
let min_start = document.getElementById("datePicker").value; 
document.getElementById("startDatePicker").setAttribute("max", todayDate);
document.getElementById("startDatePicker").setAttribute("max", todayDate);
document.getElementById("endDatePicker").setAttribute("min", min_start);
document.getElementById("monthPicker").setAttribute("max", todayMonth);

// document.getElementById("dateRange").daterangepicker({
// 	opens: 'left'
// }, function (start, end, label) {
// 	start.format('YYYY-MM-DD');
// 	end.format('YYYY-MM-DD');
// })
 

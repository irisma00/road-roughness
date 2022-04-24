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
document.getElementById("datePicker").setAttribute("max", todayDate);
document.getElementById("monthPicker").setAttribute("max", todayMonth);
 

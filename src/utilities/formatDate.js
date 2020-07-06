const formatDate = inputDate => {
  if (!inputDate) return '';

  var date = new Date(inputDate);
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yyyy = date.getFullYear();

  date = dd + '/' + mm + '/' + yyyy;

  return date;
};

export default formatDate;

// function dateFromISO8601(isostr) {
// 	var parts = isostr.match(/\d+/g);
// 	return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
// }

// const monthNames = [
// 	'January',
// 	'February',
// 	'March',
// 	'April',
// 	'May',
// 	'June',
// 	'July',
// 	'August',
// 	'September',
// 	'October',
// 	'November',
// 	'December'
// ];

// const d = new Date('2015-12-12T10:12:50.5000z');
// document.write(
//   'Le ' + d.getDay() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear()
// );

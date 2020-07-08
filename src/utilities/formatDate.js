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

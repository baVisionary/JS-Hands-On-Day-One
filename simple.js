$(document).on('submit', function(e) {
  e.preventDefault();
  let numGrade = $('#numGrade').val();
  /* grade boundaries are multiples of 10 so dividing the grade by 10 means
  only 10 values need to be captured and instead of checking each range
  using the position in a string with 10 grades listed (added 2nd A for 100)
  */
  let possGrades = 'FFFFFFDCBAA';

  letterGrade = possGrades[Math.floor(numGrade/10)];
/*
  let letterGrade = 'F';
  if (numGrade >= 90) {
    letterGrade = 'A';
  } else if (numGrade >= 80) {
    letterGrade = 'B';
  } else if (numGrade >= 70) {
    letterGrade = 'C';
  } else if (numGrade >=60) {
    letterGrade = 'D';
  }
*/

  $('#show-letter').text(`That is a ${letterGrade}`);
  $('#numGrade').val('');
})

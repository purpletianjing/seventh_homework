function scoreToGrade(score) {
  var grade = "";
  if(score > 100 || score < 0) {
    grade = "error";
  }
  return grade;
}

function scoreToGrade(score) {
  var grade = "";
  if(score > 100 || score < 0) {
    grade = "error";
  }else if (score >= 90) {
    grade = "S";
  }
  return grade;
}

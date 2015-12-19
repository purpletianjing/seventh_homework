function scoreToGrade(score) {
  var grade = "";
  if(score > 100 || score < 0) {
    grade = "error";
  }else if (score >= 90) {
    grade = "S";
  }else if (score >= 80) {
    grade = "A";
  } else if (score >= 70) {
    grade = "B";
  } else if (score >= 60) {
    grade = "C";
  } else {
    grade = 'D';
  }
  return grade;
}

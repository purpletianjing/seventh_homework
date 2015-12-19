function scoreToGrade(score) {
  var gradeRange = ['S','A','B','C','D'];
  var scoreRange = [90,80,70,60,0];
  if(score > 100 || score < 0) {
    return 'Input is over the range';
  }
  for(var index = 0; index < scoreRange.length; index++) {
    if(score >= scoreRange[index]) {
      return gradeRange[index];
    }
  }
}

function scoreToGrade(score) {
  var gradeRange = ['S','A','B','C','D'];
  var scoreRange = [90,80,70,60,0];

  if(typeof(score) !== 'number') {
    throw new TypeError("input score isn't a number!");
  }

  if(score > 100 || score < 0) {
    return 'Input is over the range(0 - 100)';
  }
  for(var index = 0; index < scoreRange.length; index++) {
    if(score >= scoreRange[index]) {
      return gradeRange[index];
    }
  }
}

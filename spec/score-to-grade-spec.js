describe("score-to-grade-spec",function() {
  it("If the score is larger than 100,the grade will be error",function(){
    expect(scoreToGrade(102)).toBe('error');
  });

  it("If the score is smaller than 0,the grade will be error",function() {
    expect(scoreToGrade(-8)).toBe('error');
  });

  it("if the score is 100,the grade will be S",function() {
    expect(scoreToGrade(100)).toBe('S');
  });

  it("if the score is larger than 90, the grade will be S",function() {
    expect(scoreToGrade(98)).toBe('S');
  });

  it("if the score is 90,the grade will be S",function(){
    expect(scoreToGrade(90)).toBe('S');
  });

});

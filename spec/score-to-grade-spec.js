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

  it("if the score is larger than 80,the grade will be A",function(){
    expect(scoreToGrade(87)).toBe('A');
  });

  it("if the score is 80,the grade will be A",function() {
    expect(scoreToGrade(80)).toBe('A');
  });

  it("if the score is larger than 70,the grade will be B",function() {
    expect(scoreToGrade(79)).toBe('B');
  });

  it("if score is 70,the grade will be B",function() {
    expect(scoreToGrade(70)).toBe('B');
  });

  it("if score is larger than 60,the grade will be A",function() {
    expect(scoreToGrade(64)).toBe('C');
  });

  it("if score is 60,the grade will be C",function() {
    expect(scoreToGrade(60)).toBe('C');
  });

  it("if score is smaller than 60,the grade will be D",function() {
    expect(scoreToGrade(43)).toBe('D');
  })
});

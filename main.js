// Determine Letter Grades - Start Code
// A: 80 - 100
// B: 65 - 79
// C: 55 - 64
// D: 50 - 54
// F: 0 - 49

// Determine Letter Grades Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Percentage Grades
  let engPercent = +document.getElementById("eng-percent").value;
  let socPercent = +document.getElementById("soc-percent").value;
  let mathPercent = +document.getElementById("math-percent").value;
  let sciPercent = +document.getElementById("sci-percent").value;

  // Calculate & Output Letter Grades

  document.getElementById("eng-letter").innerHTML = calcLetter(engPercent);

  // Social Studies

  document.getElementById("soc-letter").innerHTML = calcLetter(socPercent);

  // Mathematics
  let mathLetter;

  document.getElementById("math-letter").innerHTML = calcLetter(mathPercent);

  // Science

  document.getElementById("sci-letter").innerHTML = calcLetter(sciPercent);
}

function calcLetter(percent) {
  if (percent >= 80) {
    letter = "A";
  } else if (percent >= 65) {
    letter = "B";
  } else if (percent >= 55) {
    letter = "C";
  } else if (percent >= 50) {
    letter = "D";
  } else {
    letter = "F";
  }
  return letter;
}

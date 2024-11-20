function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
      sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
      return "A++";
  } else if (score >= 90) {
      return "A";
  } else if (score >= 80) {
      return "B";
  } else if (score >= 70) {
      return "C";
  } else if (score >= 60) {
      return "D";
  } else {
      return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  let classAverage = getAverage(totalScores);
  let studentGrade = getGrade(studentScore);
  let passOrFail = (studentGrade === "F") ? "Vous avez échoué au cours" : "Vous avez réussi le cours";

  return `Moyenne de la classe : ${classAverage}. Votre note : ${studentGrade}. ${passOrFail}.`;
}

document.getElementById('scoreForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const scoresInput = document.getElementById('scores').value;
  const studentScore = parseInt(document.getElementById('studentScore').value);

  // Convert scores input string into an array of numbers
  const scoresArray = scoresInput.split(',').map(score => parseInt(score.trim()));

  const resultMessage = studentMsg(scoresArray, studentScore);

  // Display the result
  const [average, grade, passFail] = resultMessage.split('. ');

  document.getElementById('classAverage').textContent = average;
  document.getElementById('studentGrade').textContent = grade;
  document.getElementById('passFailStatus').textContent = passFail;
});

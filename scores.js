async function loadScores() {
  let scores = [];
  try {
    // Get the latest high scores from the service
    const response = await fetch('/api/scores');
    scores = await response.json();

    // Save the scores in case we go offline in the future
    localStorage.setItem('scores', JSON.stringify(scores));
  } catch {
    // If there was an error then just use the last saved scores
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
  }
  
    const tableBodyEl = document.querySelector('#scores');
  
    if (scores.length) {
      for (const [i, score] of scores.entries()) {
        const rankTdEl = document.createElement('td');
        const nameTdEl = document.createElement('td');
        const numGuessTdEl = document.createElement('td');
        const dateTdEl = document.createElement('td');
  
        rankTdEl.textContent = i + 1;
        nameTdEl.textContent = score.name;
        numGuessTdEl.textContent = score.score;
        dateTdEl.textContent = score.date;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(rankTdEl);
        rowEl.appendChild(nameTdEl);
        rowEl.appendChild(numGuessTdEl);
        rowEl.appendChild(dateTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>No scores yet!</td></tr>';
    }
  }
  
  loadScores();
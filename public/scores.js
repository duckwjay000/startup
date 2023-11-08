async function loadScores() {
    let scores = [];
    
    
    try {
      const response = await fetch('/api/scores');
      scores = await response.json();

      // saving scores in case we go offline
      localStorage.setItem('scores');
    } catch {
      //If error, use previous scores
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
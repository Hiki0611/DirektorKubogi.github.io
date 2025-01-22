// Toggle side menu visibility
function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.style.width = sideMenu.style.width === "0px" ? "250px" : "0px";
}

// Show section
function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.remove("active"));

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add("active");

    toggleMenu();  // Close the menu after clicking
}

// Load JSON data
async function loadData() {
    const response = await fetch("data.json");
    const data = await response.json();

    // Populate schedule
    const schedule = document.querySelector("#schedule .schedule");
    data.schedule.forEach(matchDay => {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = matchDay.date;
        schedule.appendChild(dayDiv);

        matchDay.matches.forEach(match => {
            const matchDiv = document.createElement("div");
            matchDiv.classList.add("match");
            matchDiv.innerHTML = `\"${match.team1}\" -guruh <span>VS</span> \"${match.team2}\" -guruh `;
            schedule.appendChild(matchDiv);
        });
    });

    // Populate past matches
    const pastMatches = document.querySelector("#past-matches .matches");
    data.pastMatches.forEach(matchDay => {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = matchDay.date;
        pastMatches.appendChild(dayDiv);

        matchDay.matches.forEach(match => {
            const matchDiv = document.createElement("div");
            matchDiv.classList.add("match");
            matchDiv.innerHTML = `${match.team1} -guruh <span>VS</span> ${match.team2} -guruh <span class="result">${match.result}</span>`;
            pastMatches.appendChild(matchDiv);
        });
    });

    // Populate scores
    const scores = document.querySelector("#scores .scores");
    data.scores.forEach(score => {
        const scoreDiv = document.createElement("div");
        scoreDiv.classList.add("score");
        scoreDiv.innerHTML = `${score.id} Guruhi  <span>${score.ball}</span> ball`;
        scores.appendChild(scoreDiv);
    });
}

// Initializing data load
document.addEventListener("DOMContentLoaded", loadData);

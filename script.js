
const heatmap = document.getElementById("heatmap");
const contributionCount = document.getElementById("contribution-count");

let totalContributions = 0;

// Generate sample activity for the last 365 days
for (let i = 0; i < 365; i++) {
    const day = document.createElement("div");
    day.classList.add("day");

    // Sample activity level from 0 to 4
    const activity = Math.floor(Math.random() * 5);

    day.classList.add(`level-${activity}`);

    totalContributions += activity;

    day.title = `${activity} contributions`;

    heatmap.appendChild(day);
}

contributionCount.textContent =
    `${totalContributions} contributions in the last year (sample data)`;


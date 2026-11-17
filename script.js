
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

// ===== Repository Cards (SAMPLE DATA) =====

// Yeh sample data hai, real GitHub data nahi.
const sampleRepos = [
  {
    name: "github-developer-portfolio",
    html_url: "https://github.com/Ayushi98mi/github-developer-portfolio",
    description: "A dashboard that shows my GitHub activity and projects.",
    stargazers_count: 5,
    forks_count: 1,
    language: "JavaScript"
  },
  {
    name: "todo-app",
    html_url: "#",
    description: "Simple to-do list app built with HTML, CSS and JS.",
    stargazers_count: 3,
    forks_count: 0,
    language: "HTML"
  },
  {
    name: "python-calculator",
    html_url: "#",
    description: "Command line calculator written in Python.",
    stargazers_count: 2,
    forks_count: 1,
    language: "Python"
  },
  {
    name: "learning-notes",
    html_url: "#",
    description: null, // description kabhi kabhi empty hoti hai
    stargazers_count: 0,
    forks_count: 0,
    language: null // language bhi empty ho sakti hai
  }
];

// Language ke colors
const languageColors = {
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Java: "#b07219",
  "C++": "#f34b7d",
  TypeScript: "#3178c6"
};

// Safety function: text ko safe banata hai
function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function renderRepos(repos) {
  const container = document.getElementById("repo-list");
  container.innerHTML = "";

  if (repos.length === 0) {
    container.innerHTML = "<p>No repositories found.</p>";
    return;
  }

  repos.forEach(function (repo) {
    const description = repo.description
      ? escapeHTML(repo.description)
      : "No description provided.";
    const language = repo.language || "Not specified";
    const color = languageColors[repo.language] || "#999999";

    const card = document.createElement("div");
    card.className = "repo-card";
    card.innerHTML = `
      <div>
        <a class="repo-name" href="${repo.html_url}" target="_blank" rel="noopener">
          ${escapeHTML(repo.name)}
        </a>
        <p class="repo-desc">${description}</p>
      </div>
      <div class="repo-meta">
        <span><span class="lang-dot" style="background:${color}"></span>${escapeHTML(language)}</span>
        <span>⭐ ${repo.stargazers_count}</span>
        <span>🍴 ${repo.forks_count}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Page load hone par sample cards dikhao
renderRepos(sampleRepos);

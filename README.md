# GitHub Developer Portfolio Dashboard

## Project Overview
Develop a modern, professional, and responsive GitHub Developer Portfolio Dashboard that acts as a personal branding platform for developers. The application should integrate with the GitHub API to fetch and visualize real-time user-specific GitHub data, including profile information, repository statistics, contribution activity, coding consistency, and programming language distribution.

The objective is to provide developers with a centralized dashboard where they can showcase their technical journey, development activity, and open-source contributions in an attractive and interactive interface.

## 1. Frontend UI and User Interaction

### A. Developer Profile Header
Create a profile section displaying:
- GitHub profile picture, name, and username.
- Developer bio and profile link.
- Total followers and following.
- Total public repositories.
- Total stars received across public repositories.
- Account creation date and location, if available.

### B. GitHub Contribution Graph
- Implement a GitHub-style contribution heatmap showing daily coding activity over the past year.
- Use different shades of color to represent contribution intensity.
- Display the exact contribution count and date on hover.
- Show total contributions for the selected period.
- Calculate and display the current coding streak and longest coding streak.

### C. Repository Showcase
Display repositories in individual cards containing:
- Repository name and description.
- Programming language.
- Star count.
- Fork count.
- Last updated date.
- Direct link to the GitHub repository.

Include sorting and filtering options such as most stars, recently updated, and programming language.

### D. Top Programming Languages
- Analyze programming languages used across public repositories.
- Display language distribution through an interactive pie or donut chart.
- Show the percentage contribution of each language.
- Provide a visual legend with language names and corresponding colors.

### E. Responsive Dashboard
- Create a clean, modern dashboard layout with sidebar navigation.
- Include dedicated sections for Overview, Contributions, Repositories, and Technologies.
- Ensure compatibility with desktop, tablet, and mobile screens.
- Provide loading indicators, empty states, and meaningful error messages.

## 2. Backend Development and API Integration

### A. GitHub API Integration
Integrate GitHub REST API and GraphQL API to retrieve:
- User profile information.
- Public repository details.
- Repository stars and forks.
- Programming languages.
- Daily contribution activity.
- Contribution streak information.

Allow users to enter their GitHub username to dynamically load their profile and dashboard.

### B. Data Processing
- Calculate total repository stars.
- Aggregate programming language statistics.
- Process daily contribution counts.
- Calculate current and longest coding streaks.
- Organize repository information for efficient frontend rendering.

### C. SQLite Database and Caching Engine
Implement SQLite as a local caching layer.

The database should:
- Store GitHub profile metadata.
- Cache repository information.
- Store contribution statistics.
- Maintain user preferences and dashboard settings.
- Use configurable cache expiration (TTL).
- Refresh expired cache entries automatically when new data is requested.

The caching mechanism should reduce unnecessary GitHub API calls, minimize rate-limit issues, and improve application response time.

## 3. Technology Stack

- **Frontend:** React.js, HTML, CSS, JavaScript.
- **Backend:** Node.js and Express.js.
- **Database:** SQLite.
- **API Integration:** GitHub REST API and GraphQL API.
- **Data Visualization:** Recharts or Chart.js.
- **Icons:** Lucide React.

## 4. Performance and Security
- Use asynchronous API requests.
- Handle GitHub API rate limits and API failures gracefully.
- Store GitHub access tokens securely in backend environment variables.
- Never expose API tokens in frontend code.
- Implement efficient caching and reusable API services.
- Optimize components for responsive rendering.

## 5. Expected Outcome

Build a fully functional GitHub Developer Portfolio Dashboard that fetches actual GitHub data and transforms it into meaningful visual insights.

The final application should:
1. Allow users to search for any GitHub username.
2. Display a personalized developer profile.
3. Visualize contribution history and coding streaks.
4. Showcase repositories with their performance metrics.
5. Analyze and visualize programming language distribution.
6. Cache frequently accessed information using SQLite.
7. Provide a professional, responsive, and interactive user experience.

**Important:** Do not use hardcoded or dummy statistics in the final application. All profile information, repository metrics, and contribution data must come from the GitHub APIs. Include appropriate fallback states when data is unavailable.

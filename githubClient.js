const axios = require('axios');

const GITHUB_API_URL = 'https://api.github.com';

async function fetchIssues(owner, repo, filters = {}) {
    const { labels, assignee, milestone } = filters;
    let url = `${GITHUB_API_URL}/repos/${owner}/${repo}/issues`;

    const params = {};
    if (labels) params.labels = labels;
    if (assignee) params.assignee = assignee;
    if (milestone) params.milestone = milestone;

    try {
        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching issues:', error);
        return [];
    }
}

module.exports = { fetchIssues };

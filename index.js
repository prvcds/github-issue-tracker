const { fetchIssues } = require('./githubClient');

async function main() {
    const owner = 'prvcds';
    const repo = 'pet-kitten-cli-rust';
    const filters = {
        labels: 'bug',
        assignee: 'your-github-username',
        milestone: '1'
    };

    const issues = await fetchIssues(owner, repo, filters);
    displayIssues(issues);
}

function displayIssues(issues) {
    if (issues.length === 0) {
        console.log('No issues found.');
        return;
    }

    issues.forEach(issue => {
        console.log(`Title: ${issue.title}`);
        console.log(`URL: ${issue.html_url}`);
        console.log(`Labels: ${issue.labels.map(label => label.name).join(', ')}`);
        console.log(`Assignee: ${issue.assignee ? issue.assignee.login : 'None'}`);
        console.log(`Milestone: ${issue.milestone ? issue.milestone.title : 'None'}`);
        console.log('---');
    });
}

main();

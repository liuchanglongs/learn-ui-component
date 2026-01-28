module.exports = {
    types: [
        { type: 'feat', section: '✨ Features', hidden: false },
        { type: 'fix', section: '🐛 Bug Fixes', hidden: false },
        { type: 'perf', section: '⚡ Performance Improvements', hidden: false },
        { type: 'revert', section: '⏪ Reverts', hidden: false },
        { type: 'docs', section: '📝 Documentation', hidden: false },
        { type: 'style', section: '💄 Styles', hidden: false },
        { type: 'refactor', section: '♻️ Code Refactoring', hidden: false },
        { type: 'test', section: '✅ Tests', hidden: false },
        { type: 'build', section: '📦 Build System', hidden: false },
        { type: 'ci', section: '👷 CI/CD', hidden: true },
        { type: 'chore', section: '🔧 Chores', hidden: true }
    ],
    preMajor: true,
    commitUrlFormat: '{{host}}/{{owner}}/{{repository}}/commit/{{hash}}',
    compareUrlFormat: '{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}',
    issueUrlFormat: '{{host}}/{{owner}}/{{repository}}/issues/{{id}}',
    userUrlFormat: '{{host}}/{{user}}',
    releaseCommitMessageFormat: 'chore(release): {{currentTag}}',
    issuePrefixes: ['#']
}

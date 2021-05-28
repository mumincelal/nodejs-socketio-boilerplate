module.exports = {
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'refactor', 'test', 'chore']],
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lowerCase'],
    'subject-case': [2, 'always', 'lowerCase'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 50],
    'subject-min-length': [2, 'always', 10]
  }
};

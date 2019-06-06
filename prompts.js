function isPro(answers) {
  return answers.version === 'Pro'
}

module.exports = [
  {
    name: 'version',
    type: 'list',
    message: 'Free or Pro?',
    choices: ['Free', 'Pro'],
    default: 'Free'
  },
  {
    name: 'token',
    type: 'input',
    message: 'Please enter the token',
    when: isPro
  },
  {
    name: 'defaultApp',
    type: 'list',
    message: 'Default Template or Demo App?',
    choices: ['Default', 'Demo'],
    default: 'Default'
  }
]
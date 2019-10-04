function isPro(answers) {
  return answers.version === 'Pro'
}

module.exports = [
  {
    name: 'mode',
    type: 'list',
    message: 'Please choose type of installation:',
    choices: ['New app', 'Existing app', 'Demo'],
    default: 'New app'
  },
  {
    name: 'version',
    type: 'list',
    message: 'Free or Pro version?',
    choices: ['Free', 'Pro'],
    default: 'Free'
  },
  {
    name: 'token',
    type: 'input',
    message: 'Please enter your gitlab token:',
    when: isPro
  },
  {
    name: 'styling',
    type: 'list',
    message: 'Select the styling option:',
    choices: ['Compiled in the mdbvue package (CSS)', 'Editable in your project (SCSS)'],
    default: 'Compiled in the mdbvue package (CSS)'
  }
]
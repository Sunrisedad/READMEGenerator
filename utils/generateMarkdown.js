// FUNCTION TO GENERATE MARKDOWN FOR README

function generateMarkdown(data) {
  return `# ${data.title}


  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [License](#license)
  * [Contributions](#contributions)
  * [Questions](#questions)
  
  
  # Description
  ${data.description}
  
  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Tests
  ${data.tests}

  # License
  ${data.license}

  # Contributions
  ${data.contributions}

  # Questions
  ${data.questions}


  
`;
}

module.exports = generateMarkdown;
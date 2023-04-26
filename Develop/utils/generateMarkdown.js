// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  - [${data.tableOfContents[0]}](#${data.tableOfContents[0]})
  - [${data.tableOfContents[1]}](#${data.tableOfContents[1]})
  - [${data.tableOfContents[2]}](#${data.tableOfContents[2]})
  - [${data.tableOfContents[3]}](#${data.tableOfContents[3]})
  - [${data.tableOfContents[4]}](#${data.tableOfContents[4]})
  - [${data.tableOfContents[5]}](#${data.tableOfContents[5]})
  - [${data.tableOfContents[6]}](#${data.tableOfContents[6]})
  - [${data.tableOfContents[7]}](#${data.tableOfContents[7]})
  - [${data.tableOfContents[8]}](#${data.tableOfContents[8]})

  ## ${data.tableOfContents[0]}

  ## ${data.tableOfContents[1]}

  ## ${data.tableOfContents[2]}

  ## ${data.tableOfContents[3]}

  ## ${data.tableOfContents[4]}

  ## ${data.tableOfContents[5]}

  ## ${data.tableOfContents[6]}

  ## ${data.tableOfContents[7]}

  ## ${data.tableOfContents[8]}
 

`;
}

module.exports = generateMarkdown;

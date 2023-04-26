// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    Boost:'[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    BSD: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    CCO: '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
    Eclipse: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    GNU: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    ODC: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)',
    Perl: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
  }
  return badge[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [${data.tableOfContents[0]}](#${data.tableOfContents[0]})
  - [${data.tableOfContents[1]}](#${data.tableOfContents[1]})
  - [${data.tableOfContents[2]}](#${data.tableOfContents[2]})
  - [${data.tableOfContents[3]}](#${data.tableOfContents[3]})
  - [${data.tableOfContents[4]}](#${data.tableOfContents[4]})
  - [${data.tableOfContents[5]}](#${data.tableOfContents[5]})
  - [${data.tableOfContents[6]}](#${data.tableOfContents[6]})
  - [${data.tableOfContents[7]}](#${data.tableOfContents[7]})

  ## ${data.tableOfContents[0]}
  - ${data.description}

  ## ${data.tableOfContents[1]}
  - ${data.installation}

  ## ${data.tableOfContents[2]}
  - ${data.usage}
  ### ![Image](${data.image})

  ## ${data.tableOfContents[3]}
  - ${data.license}
  ${renderLicenseBadge(data.license)}

  ## ${data.tableOfContents[4]}
  - ${data.contributions}

  ## ${data.tableOfContents[5]}
  - ${data.tests}

  ## ${data.tableOfContents[6]}
  - ${data.questions}

  ## ${data.tableOfContents[7]}
 - ${data.cited}

 ## Contact
  - github.com/${data.git}
  - ${data.email}

`;
}

module.exports = generateMarkdown;

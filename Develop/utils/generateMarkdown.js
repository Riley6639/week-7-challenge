// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license ? `![License](https://img.shields.io/badge/License-${license}-blue.svg)` : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license ? `\n* [License](#license)\n` : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license ? `## License\nThis project is licensed under the ${license} license.` : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
##${renderLicenseBadge(data.title)}
##${renderLicenseLink(data.description)}
##${renderLicenseSection(data.installation)}
##${renderLicenseSection(data.usage)}
##${renderLicenseSection(data.contribution)}
##${renderLicenseSection(data.license)}
##${renderLicenseSection(data.github)}
##${renderLicenseSection(data.email)}
`;
}

export default generateMarkdown;

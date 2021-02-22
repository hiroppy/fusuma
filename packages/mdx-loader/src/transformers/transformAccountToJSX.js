'use strict';

function createA(url, serviceName, icon, text) {
  return `<a href="${url}" className="account account-${serviceName}" aria-label="account-${serviceName}"><${icon} />${
    text ? text : ''
  }</a>`;
}

function transformAccountToJSX(value) {
  const [serviceName, account, text] = value;

  switch (serviceName) {
    case 'twitter':
      return {
        type: 'jsx',
        value: createA(`https://twitter.com/${account}`, 'twitter', 'Icons.FaTwitter', text),
      };
    case 'github':
      return {
        type: 'jsx',
        value: createA(`https://github.com/${account}`, 'github', 'Icons.FaGithub', text),
      };
    case 'facebook':
      return {
        type: 'jsx',
        value: createA(`https://www.facebook.com/${account}`, 'facebook', 'Icons.FaFacebook', text),
      };
    case 'linkedin':
      return {
        type: 'jsx',
        value: createA(
          `https://www.linkedin.com/in/${account}`,
          'linkedin',
          'Icons.FaLinkedin',
          text
        ),
      };
    default:
      throw new Error('Not Found the service name');
  }
}

module.exports = transformAccountToJSX;

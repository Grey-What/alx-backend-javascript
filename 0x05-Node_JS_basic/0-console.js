/**
 * displayMessage - prints a message to stdout
 *
 * @param {String} message
 */
const displayMessage = (message) => {
  process.stdout.write(message);
};

module.exports = displayMessage;

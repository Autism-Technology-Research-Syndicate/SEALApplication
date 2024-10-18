/**
 * Validates an email address to ensure it follows a specific pattern.
 *
 * @param {string} email - The email address to be validated.
 * @returns {boolean} - Returns true if the email address is valid, false otherwise.
 */
export const validateEmail = (email: string) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co\.[a-zA-Z]{2,})$/;
  return re.test(email);
};

/**
 * Validates a password to ensure it meets specific criteria:
 * - At least 8 characters long
 * - Contains at least two of the following: uppercase letters, lowercase letters, numbers, and symbols.
 *
 * @param {string} password - The password to be validated.
 * @returns {boolean} - Returns true if the password meets the criteria, false otherwise.
 */
export const validatePass = (password: string) => {
  if (password.length < 8) {
    return false;
  }

  const upperRe = /[A-Z]/;
  const lowerRe = /[a-z]/;
  const numberRe = /\d/;
  const symbolRe = /[!@#$%^&*(),.?":{}|<>]/;

  let count = 0;

  if (upperRe.test(password)) count++;
  if (lowerRe.test(password)) count++;
  if (numberRe.test(password)) count++;
  if (symbolRe.test(password)) count++;

  return count >= 2;
};

/**
 * Validates an age to ensure it is within a specific range (1 to 25).
 *
 * @param {string} age - The age to be validated.
 * @returns {boolean} - Returns true if the age is within the range, false otherwise.
 */
export const validateAge = (age: string) => {
  return Number(age) >= 1 && Number(age) <= 25;
};

/**
 * Validates a username to ensure it is not empty.
 *
 * @param {string} username - The username to be validated.
 * @returns {boolean} - Returns true if the username is not empty, false otherwise.
 */
export const validateName = (username: string) => {
  return username.trim().length > 0;
};

/**Error messages to be displayed for specific validation failures.*/
export const errorText = {
  email: 'Please enter a valid email address',
  pass: 'Passwords must have at least 8 characters and contain at least two of the following: uppercase letters, lowercase letters, numbers, and symbols',
  age: 'Please enter a valid age',
  name: 'Please enter a username',
};

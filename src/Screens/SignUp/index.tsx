import {transformLabels} from '../../Components/DropDownList';

export interface RegData {
  email: string;
  username: string;
  password: string;
  age: number;
  interests: string[];
  estimatedAttentionSpan: number;
  levelOfSpectrum: number;
  settingsChoices: string;
  progessInCurriculum: number;
  averageAccuracy: number;
  description: string;
  necessaryBreakTime: number;
}

export const validateEmail = (email: string) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co\.[a-zA-Z]{2,})$/
  return re.test(email)
}

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
}

export const validateAge = (age: string) => {
  return age.length > 0 && Number(age) >= 1 && Number(age) <= 25
}

export const validateName = (username: string) => {
  return username.trim().length > 0
}

export const errorText = {
  email: 'Please enter a valid email address',
  pass: 'Passwords must have at least 8 characters and contain at least two of the following: uppercase letters, lowercase letters, numbers, and symbols',
  age: 'Please enter a valid age',
  name: 'Please enter a username',
}

const interests: string[] = ['Apple', 'Banana', 'Kiwi', 'Lime', 'Lemon']
export const labels = transformLabels(interests)
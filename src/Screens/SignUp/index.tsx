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
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co\.[a-zA-Z]{2,})$/;
  return re.test(email);
};

export const validatePass = (password: string) => {
  const re =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,}$/;
  return re.test(password);
};

export const validateAge = (age: string) => {
  return age.length > 0 && Number(age) >= 1 && Number(age) <= 25;
};

export const validateName = (username: string) => {
  return username.length > 0;
};

const interests: string[] = ['Apple', 'Banana', 'Kiwi', 'Lime', 'Lemon'];
export const labels = transformLabels(interests);

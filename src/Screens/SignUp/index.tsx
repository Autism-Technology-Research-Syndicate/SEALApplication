import { transformLabels } from "../../Components/DropDownList";

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

const interests: string[] = []
export const labels = transformLabels(interests)

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

// Array of strings to be used as dropdown options on sign up screen
export const labels: string[] = ['Apple', 'Banana', 'Kiwi', 'Lime', 'Lemon']

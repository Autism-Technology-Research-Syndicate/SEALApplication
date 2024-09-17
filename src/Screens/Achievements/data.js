import { allUserAchievements } from '../../../Database/dbInitialization';

// Function to fetch achievements
export const fetchAchievements = async (userId) => {
  try {
    const userAchievements = await allUserAchievements(userId);
    return userAchievements;
  } catch (error) {
    console.error('Failed to fetch achievements:', error);
    throw error;
  }
};

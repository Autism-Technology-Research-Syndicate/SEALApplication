import { useState, useEffect } from 'react';
import { allUserAchievements } from '../../../Database/dbInitialization';

const useAchievements = (userId) => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAchievements = async () => {
      try {
        const userAchievements = await allUserAchievements(userId);
        setAchievements(userAchievements);
      } catch (error) {
        console.error('Failed to fetch achievements:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadAchievements();
  }, [userId]);

  return { achievements, loading, error };
};

export default useAchievements;

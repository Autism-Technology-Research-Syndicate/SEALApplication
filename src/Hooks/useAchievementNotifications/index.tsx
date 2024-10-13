import { useEffect, useRef } from 'react';
import { useNotification } from '../../Features/useNotification';

interface Achievement {
  id: number;
  name: string;
  description: string;
  points: number;
  user_id: number;
}

export const useAchievementNotifications = (achievements: Achievement[]) => {
  const { displayNotification } = useNotification();
  const displayedNotifications = useRef<Set<number>>(new Set());

  useEffect(() => {
    const displayNotifications = async () => {
      if (achievements) {
        for (const achievement of achievements) {
          if (achievement.points > 1 && !displayedNotifications.current.has(achievement.id)) { // Replace 1 with your condition
            console.log(`Displaying notification for: ${achievement.description} with ${achievement.points} points`);
            await displayNotification('Achievement Unlocked', `${achievement.points} ${achievement.description}`);
            displayedNotifications.current.add(achievement.id);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Add a 1-second delay
          }
        }
      }
    };

    displayNotifications();
  }, [achievements, displayNotification]);
};

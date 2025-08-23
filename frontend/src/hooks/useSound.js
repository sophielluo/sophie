// frontend/src/hooks/useSound.js
import { useCallback } from 'react';

const SOUND_URLS = {
  click: "https://res.cloudinary.com/dytt6x7n7/video/upload/v1743975038/mouse_click_light_shortened_qp9omx.mp4",
  clickAlt: "https://res.cloudinary.com/dytt6x7n7/video/upload/v1743974449/mouse_click_shortened_jrfnxg.mp4",
  print: "https://res.cloudinary.com/dytt6x7n7/video/upload/v1744060842/polaroid_printing_blz53b.mov"
};

const useSound = () => {
  const playSound = useCallback((soundType, volume = 0.3) => {
    try {
      const soundUrl = SOUND_URLS[soundType];
      
      if (!soundUrl) {
        console.warn(`Sound type "${soundType}" not found`);
        return;
      }

      // Create a fresh audio instance each time
      const sound = new Audio(soundUrl);
      sound.volume = volume; // Set volume (0.0 to 1.0)

      // Add an event listener to remove the element after it plays
      sound.addEventListener('ended', () => {
        sound.remove(); // Clean up after playback
      });

      // Play the sound with error handling
      sound.play().catch(err => {
        console.warn('Could not play sound:', err);
      });
    } catch (err) {
      console.error('Error creating audio:', err);
    }
  }, []);

  // Convenience functions for specific sounds
  const playClickSound = useCallback(() => playSound('click'), [playSound]);
  const playClickSoundAlt = useCallback(() => playSound('clickAlt'), [playSound]);
  const playPrintSound = useCallback(() => playSound('print'), [playSound]);

  return {
    playSound,
    playClickSound,
    playClickSoundAlt,
    playPrintSound
  };
};

export default useSound;

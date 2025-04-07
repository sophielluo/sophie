import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const VinylRecordPlayer = ({ audioSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const progressValue = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(progressValue);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <motion.div
                className="w-64 h-64 rounded-full bg-gray-800 border-4 border-gray-600 flex items-center justify-center shadow-2xl"
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                onClick={togglePlay}
            >
                <div className="w-24 h-24 bg-black rounded-full"></div>
            </motion.div>
            
            <audio
                ref={audioRef}
                src={audioSrc}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
            />
        </div>
    );
};

export default VinylRecordPlayer;

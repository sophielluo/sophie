import React, { useState, useEffect, useRef } from 'react';
import cld from '../../utils/cloudinary';

const MusicPage = () => {
  const [tracks, setTracks] = useState([]);
  const [loadingTracks, setLoadingTracks] = useState(true);
  const [playingTrackId, setPlayingTrackId] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [musicNotes, setMusicNotes] = useState({});
  const clickSoundURL = "https://res.cloudinary.com/dytt6x7n7/video/upload/v1743975038/mouse_click_light_shortened_qp9omx.mp4";

  const playClickSound = () => {
    try {
      // Create a fresh audio instance each time
      const sound = new Audio(clickSoundURL);
      sound.volume = 0.3; // Set volume (0.0 to 1.0)
      
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
  };

  // Ref to store all audio elements
  const audioRefs = useRef({});
  // Ref for animation intervals
  const noteIntervalsRef = useRef({});

  const getCloudinaryImage = (imageId) => {
    const image = cld.image(imageId);
    return image;
  };

  useEffect(() => {
    // These are the track IDs in your Cloudinary music folder
    const cloudinaryTracks = [
      {
        "id": 1,
        "title": "Back to December",
        "description": "One of my favorite songs from her earlier eras. The bridge is just way too beautiful...",
        "tags": ["Country Pop", "Ballad", "Taylor Swift"],
        "cloudinaryId": "backtodecember_ty6krb.mp3",
        "fileType": "mp3",
        "coverId": "sparks_fly_fvyfqi.png"
      },
      {
        "id": 2,
        "title": "Sparks Fly",
        "description": "I promise you there are more songs in this list than just the ones from Taylor Swift.",
        "tags": ["Country Pop", "Upbeat", "Taylor Swift"],
        "cloudinaryId": "sparksfly_zmg6go.mp3",
        "fileType": "mp3",
        "coverId": "sparks_fly_fvyfqi.png"
      },
      {
        "id": 3,
        "title": "光阴独白",
        "description": "Got super super addicted to this song after watching a c-drama for which this is the OST.",
        "tags": ["Mandarin", "Ballad"],
        "cloudinaryId": "guangyin_ryxj4l.m4a",
        "fileType": "mp4",
        "coverId": "gydb_fsylpa.png"
      },
      {
        "id": 4,
        "title": "刻在我心底的名字",
        "description": "Up till now I still wonder what is the correction pronunciation of the first line... I hope my 4 years of O-level French did not fail me this time.", 
        "tags": ["Mandarin", "Soundtrack"],
        "cloudinaryId": "kezaiwo_lpzjwg.mp3",
        "fileType": "mp3",
        "coverId": "kzbxddmz_e3wnkc.png"
      },
      {
        "id": 5,
        "title": "10409",
        "description": "My farewell tribute to Nanyang.",
        "tags": ["Original", "Instrumental", "Graduation"],
        "cloudinaryId": "10409_banqxb.mp4",
        "fileType": "mp4",
        "coverId": "10409_cover_xunz8r.png"
      },
      {
        "id": 6,
        "title": "I'm Me",
        "description": "A really cute song by Us the Duo! They have many many good songs.",
        "tags": ["Pop", "Inspirational", "Happy"],
        "cloudinaryId": "5159_030e_0208_f3f8d5b77c4d68ce916b5b6f7d50202e_dxlokb.mp4",
        "fileType": "mp4",
        "coverId": "imme_tgtdxz.png"
      },
      {
        "id": 7,
        "title": "Someone You Loved",
        "description": "I forgot why I recorded this, I guess it was trending then.",
        "tags": ["Pop", "Ballad"],
        "cloudinaryId": "0153_0552_5558_693595ce2128af302027b2131906cdf9_wwmyue.mp4",
        "fileType": "mp4",
        "coverId": "someoneyouloved_n5esqd.png"
      }
    ];

    // Process the tracks to add URLs
    const processedTracks = cloudinaryTracks.map(track => {
      let url;
      if (track.fileType === 'mp3') {
        url = cld.video(track.cloudinaryId).toURL(); // For audio, we still use the video method
      } else {
        url = cld.video(track.cloudinaryId).toURL();
      }

      // Get the cover image URL
      const coverUrl = cld.image(track.coverId).toURL();

      // Calculate duration from metadata if possible, or use default
      const duration = track.duration || (track.id % 2 === 0 ? "3:" + (20 + track.id * 5) : "4:" + (10 + track.id * 3));

      return {
        ...track,
        url,
        coverUrl,
        duration
      };
    });

    setTracks(processedTracks);
    setLoadingTracks(false);
  }, []);

  // Format time in minutes:seconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Handle play/pause functionality
  const togglePlay = (trackId) => {
    const audioElement = audioRefs.current[trackId];

    if (!audioElement) return;

    // If this is already the playing track, toggle play/pause
    if (playingTrackId === trackId) {
      if (audioElement.paused) {
        startGeneratingNotes(trackId);
      } else {
        audioElement.pause();
        setPlayingTrackId(null);
        stopGeneratingNotes(trackId);
      }
    } else {
      // If a different track is playing, pause it first
      if (playingTrackId !== null && audioRefs.current[playingTrackId]) {
        audioRefs.current[playingTrackId].pause();
        stopGeneratingNotes(playingTrackId);
      }

      // Play the new track
      audioElement.play();
      setPlayingTrackId(trackId);
      setCurrentTime(audioElement.currentTime);
      setDuration(audioElement.duration);
      startGeneratingNotes(trackId);
    }
  };

  const handleTogglePlay = (trackId) => {
    playClickSound();
    togglePlay(trackId);
  };

  // Function to start generating notes
  const startGeneratingNotes = (trackId) => {
    // Initialize notes array for this track if it doesn't exist
    if (!musicNotes[trackId]) {
      setMusicNotes(prev => ({...prev, [trackId]: []}));
    }
    
    // Clear any existing interval
    stopGeneratingNotes(trackId);
    
    // Create new interval for generating notes
    const intervalId = setInterval(() => {
      const noteSymbols = ['♪', '♫', '♬', '♩'];
      const noteTypes = ['music-note-1', 'music-note-2', 'music-note-3', 'music-note-4'];
      
      // Create a new note with random properties
      const newNote = {
        id: Date.now(), // unique ID
        symbol: noteSymbols[Math.floor(Math.random() * noteSymbols.length)],
        className: noteTypes[Math.floor(Math.random() * noteTypes.length)],
        top: 50,    // center vertically
        left: 50,   // center horizontally
        direction: Math.floor(Math.random() * 8), // 0-7 for 8 possible directions
      };
      
      // Add the new note
      setMusicNotes(prev => ({
        ...prev,
        [trackId]: [...(prev[trackId] || []), newNote]
      }));
      
      // Remove the note after animation completes (3.5s to be safe)
      setTimeout(() => {
        setMusicNotes(prev => ({
          ...prev,
          [trackId]: (prev[trackId] || []).filter(note => note.id !== newNote.id)
        }));
      }, 5000);
      
    }, 750); // Generate a new note every 750ms
    
    // Store the interval ID
    noteIntervalsRef.current[trackId] = intervalId;
  };
  
  // Function to stop generating notes
  const stopGeneratingNotes = (trackId) => {
    if (noteIntervalsRef.current[trackId]) {
      clearInterval(noteIntervalsRef.current[trackId]);
      noteIntervalsRef.current[trackId] = null;
    }
  };

  // Handle time update for the current playing track
  const handleTimeUpdate = (trackId) => {
    if (playingTrackId === trackId) {
      const audioElement = audioRefs.current[trackId];
      setCurrentTime(audioElement.currentTime);
    }
  };

   // Cleanup intervals on unmount
   useEffect(() => {
    return () => {
      Object.keys(noteIntervalsRef.current).forEach(trackId => {
        if (noteIntervalsRef.current[trackId]) {
          clearInterval(noteIntervalsRef.current[trackId]);
        }
      });
    };
  }, []);

  // Handle seeking when the progress bar is clicked
  const handleSeek = (trackId, e) => {
    if (!audioRefs.current[trackId]) return;

    const audioElement = audioRefs.current[trackId];
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width;

    audioElement.currentTime = position * audioElement.duration;
    setCurrentTime(audioElement.currentTime);
  };
  
  return (
    <div className="music-section">
      <h2>My Covers</h2>
      <p className="section-description">
        I sing sometimes (actually a lot). From shower sessions to stage performances, singing brings me pure joy. 
        I always believed that music has been one of mankind's greatest gift, allowing us to express what words alone cannot. 
        Below are some covers I've created over the years - little pieces of my heart shared through melody.
      </p>

      {loadingTracks ? (
        <div>Loading tracks...</div>
      ) : (
        <div className="music-tracks-container">
          {tracks.map(track => (
            <div key={track.id} className="music-track-item">
              <div className="track-left-container">
                <div className={`track-icon record-container ${playingTrackId === track.id ? 'spinning' : ''}`}>
                  <img
                    src={track.coverUrl}
                    alt={`${track.title} cover`}
                    className="record-image"
                  />
                  <div
                    className={`play-button-overlay ${playingTrackId === track.id ? 'hidden' : ''}`}
                    onClick={() => handleTogglePlay(track.id)}
                  ></div>

                  {/* Add this static floating notes container */}
                  {/* <div className={`floating-notes-container ${playingTrackId === track.id ? '' : 'hidden-notes'}`}>
                    <div className="music-note music-note-1" style={{ top: '50%', left: '20%' }}>♪</div>
                    <div className="music-note music-note-2" style={{ top: '30%', left: '70%' }}>♫</div>
                    <div className="music-note music-note-3" style={{ top: '70%', left: '40%' }}>♬</div>
                    <div className="music-note music-note-4" style={{ top: '25%', left: '50%' }}>♩</div>
                  </div> */}
                  <div className={`floating-notes-container ${playingTrackId === track.id ? '' : 'hidden-notes'}`}>
                    {musicNotes[track.id]?.map(note => (
                      <div 
                        key={note.id} 
                        className={`music-note ${note.className} animate`}
                        style={{ 
                          top: `${note.top}%`, 
                          left: `${note.left}%` 
                        }}
                      >
                        {note.symbol}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="track-right-container">
                <div className="track-info">
                  <h3>{track.title}</h3>
                  <p>{track.description}</p>
                  <div className="track-tags">
                    {track.tags.map((tag, index) => (
                      <span key={index} className="portfolio-tag">{tag}</span>
                    ))}
                  </div>

                  {/* Hidden audio element */}
                  <audio
                    ref={element => { audioRefs.current[track.id] = element; }}
                    src={track.url}
                    onTimeUpdate={() => handleTimeUpdate(track.id)}
                    onEnded={() => setPlayingTrackId(null)}
                    onLoadedMetadata={() => {
                      if (audioRefs.current[track.id]) {
                        setDuration(audioRefs.current[track.id].duration);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MusicPage;